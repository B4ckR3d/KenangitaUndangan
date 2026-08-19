import crypto from "crypto";
import { prisma } from "./prisma";

export interface PendingRegisterPayload {
  username: string;
  email: string;
  password: string; // plain text before verification, will be hashed on completion
  hp?: string;
  slug: string;
  theme: string;
  mempelai: {
    nama_pria: string;
    nama_panggilan_pria: string;
    nama_ayah_pria?: string;
    nama_ibu_pria?: string;
    nama_wanita: string;
    nama_panggilan_wanita: string;
    nama_ayah_wanita?: string;
    nama_ibu_wanita?: string;
  };
}

export function generateOtpCode(): string {
  return crypto.randomInt(100000, 1000000).toString();
}

export async function saveOtpToken({
  email,
  action = "register",
  payload,
  expiryMinutes = 10,
}: {
  email: string;
  action: "register" | "login";
  payload?: any;
  expiryMinutes?: number;
}): Promise<{ code: string; expiresAt: Date }> {
  const normalizedEmail = email.toLowerCase().trim();
  const code = generateOtpCode();
  const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

  // Clean old OTPs for this email and action
  await prisma.otpToken.deleteMany({
    where: {
      email: normalizedEmail,
      action,
    },
  });

  // Create new OTP token record
  await prisma.otpToken.create({
    data: {
      email: normalizedEmail,
      code,
      action,
      expires_at: expiresAt,
      payload: payload ? JSON.stringify(payload) : null,
    },
  });

  return { code, expiresAt };
}

export async function verifyAndConsumeOtp({
  email,
  code,
  action = "register",
}: {
  email: string;
  code: string;
  action: "register" | "login";
}): Promise<{ valid: boolean; error?: string; payload?: any }> {
  const normalizedEmail = email.toLowerCase().trim();
  const trimmedCode = code.trim();

  const tokenRecord = await prisma.otpToken.findFirst({
    where: {
      email: normalizedEmail,
      code: trimmedCode,
      action,
    },
    orderBy: { created_at: "desc" },
  });

  if (!tokenRecord) {
    return { valid: false, error: "Kode OTP tidak valid atau salah" };
  }

  if (new Date() > new Date(tokenRecord.expires_at)) {
    // Delete expired token
    await prisma.otpToken.delete({ where: { id: tokenRecord.id } });
    return { valid: false, error: "Kode OTP telah kedaluwarsa. Silakan minta kode baru." };
  }

  let parsedPayload: any = null;
  if (tokenRecord.payload) {
    try {
      parsedPayload = JSON.parse(tokenRecord.payload);
    } catch {
      parsedPayload = null;
    }
  }

  // Delete consumed OTP token
  await prisma.otpToken.delete({ where: { id: tokenRecord.id } });

  return { valid: true, payload: parsedPayload };
}
