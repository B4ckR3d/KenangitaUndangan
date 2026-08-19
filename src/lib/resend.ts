import { Resend } from "resend";
import { getOtpEmailTemplate } from "./emailTemplates";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL || "Kenangita <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface SendOtpEmailParams {
  to: string;
  code: string;
  userName?: string;
  action?: "register" | "login";
  expiryMinutes?: number;
}

export async function sendOtpEmail({
  to,
  code,
  userName = "Calon Pengantin",
  action = "register",
  expiryMinutes = 10,
}: SendOtpEmailParams) {
  const { subject, html, text } = getOtpEmailTemplate({
    code,
    userName,
    action,
    expiryMinutes,
  });

  // If Resend API Key is configured, attempt real email delivery
  if (resend && resendApiKey && !resendApiKey.includes("YOUR_API_KEY")) {
    try {
      const response = await resend.emails.send({
        from: resendFromEmail,
        to: [to],
        subject,
        html,
        text,
      });

      if (response.error) {
        console.error("Resend API Error:", response.error);
        // If domain isn't verified or error occurs, log fallback code in console for development
        console.log(
          `\n💌 [KENANGITA EMAIL OTP FALLBACK] To: ${to} | Code: ${code} | Action: ${action}\n`
        );
        return {
          success: true,
          simulated: true,
          message: "Email dikirim (Sandbox Mode)",
          id: response.error.name,
        };
      }

      console.log(`✅ [RESEND] Email sent successfully to ${to}, ID: ${response.data?.id}`);
      return { success: true, id: response.data?.id, simulated: false };
    } catch (err: any) {
      console.error("Resend Sending Exception:", err);
      console.log(
        `\n💌 [KENANGITA EMAIL OTP FALLBACK] To: ${to} | Code: ${code} | Action: ${action}\n`
      );
      return {
        success: true,
        simulated: true,
        message: "Email diproses dalam mode pengembang",
      };
    }
  }

  // Development fallback when RESEND_API_KEY is not yet provided
  console.log(
    `\n==================================================\n💌 [KENANGITA EMAIL OTP] (RESEND DEV SIMULATION)\nTo: ${to}\nSubject: ${subject}\nKode OTP: ${code}\nMasa Berlaku: ${expiryMinutes} Menit\n==================================================\n`
  );

  return {
    success: true,
    simulated: true,
    message: "Kode OTP disimulasikan (cek console terminal jika API key belum diisi)",
  };
}
