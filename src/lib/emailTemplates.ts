export function getOtpEmailTemplate({
  code,
  userName = "Calon Pengantin",
  action = "register",
  expiryMinutes = 10,
}: {
  code: string;
  userName?: string;
  action?: "register" | "login";
  expiryMinutes?: number;
}): { subject: string; html: string; text: string } {
  const isRegister = action === "register";
  const title = isRegister
    ? "Verifikasi Pendaftaran Undangan Digital"
    : "Kode OTP Masuk Akun";
  const subject = `[Kenangita] ${code} adalah Kode OTP Verifikasi Anda`;

  const text = `Halo ${userName},\n\nKode verifikasi OTP Anda adalah: ${code}\n\nKode ini berlaku selama ${expiryMinutes} menit. Jangan berikan kode ini kepada siapapun demi keamanan akun Anda.\n\nSalam hangat,\nTim Kenangita.id`;

  const html = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #090d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #090d16; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 520px; background-color: #0f172a; border-radius: 24px; border: 1px solid #1e293b; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); overflow: hidden;">
          <!-- Header Banner -->
          <tr>
            <td align="center" style="padding: 36px 30px 20px 30px; background: linear-gradient(180deg, rgba(244, 63, 94, 0.15) 0%, rgba(15, 23, 42, 0) 100%);">
              <div style="display: inline-block; width: 48px; height: 48px; background: linear-gradient(135deg, #f43f5e, #db2777); border-radius: 16px; line-height: 48px; text-align: center; margin-bottom: 14px; box-shadow: 0 10px 25px rgba(244, 63, 94, 0.4);">
                <span style="font-size: 24px; color: #ffffff;">❤️</span>
              </div>
              <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                Kenangita<span style="color: #f43f5e;">.id</span>
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8; font-weight: 500;">
                Platform Undangan Digital Modern & Elegan
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 20px 36px 36px 36px;">
              <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 700; color: #f8fafc; text-align: center;">
                ${title}
              </h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #94a3b8; text-align: center;">
                Halo <strong style="color: #f43f5e;">${userName}</strong>, terima kasih telah memilih Kenangita. Masukkan kode 6 digit berikut untuk memverifikasi akun dan mengaktifkan undangan digital Anda:
              </p>

              <!-- OTP Code Display Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background-color: #020617; border: 2px dashed #f43f5e; border-radius: 16px; padding: 18px 36px; text-align: center;">
                      <span style="font-family: 'Courier New', Courier, monospace; font-size: 38px; font-weight: 800; letter-spacing: 8px; color: #ffffff; text-shadow: 0 0 20px rgba(244, 63, 94, 0.6);">
                        ${code}
                      </span>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Expiry Alert -->
              <div style="background-color: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.2); border-radius: 12px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #fda4af; font-weight: 500;">
                  ⏱️ Kode OTP ini hanya berlaku selama <strong>${expiryMinutes} menit</strong>.
                </p>
              </div>

              <p style="margin: 0 0 10px 0; font-size: 12px; line-height: 1.5; color: #64748b; text-align: center;">
                Jika Anda tidak merasa melakukan pendaftaran atau permintaan ini, abaikan email ini. Keamanan akun Anda tetap terjaga.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 36px; background-color: #0b1120; border-top: 1px solid #1e293b; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                &copy; ${new Date().getFullYear()} Kenangita.id. Hak cipta dilindungi undang-undang.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return { subject, html, text };
}
