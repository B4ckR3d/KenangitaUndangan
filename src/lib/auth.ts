import jwt from "jsonwebtoken";
import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-kenangita-key";

export interface TokenPayload {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user" | string;
  namaLengkap?: string;
  permissions?: string;
}

export function md5Hash(text: string): string {
  return crypto.createHash("md5").update(text).digest("hex");
}

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}
