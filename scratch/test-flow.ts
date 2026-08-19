import { prisma } from "../src/lib/prisma";
import { saveOtpToken, verifyAndConsumeOtp } from "../src/lib/otp";
import { sendOtpEmail } from "../src/lib/resend";

async function runTest() {
  console.log("🚀 Testing NikahKuy Auth, OTP & Invitation Creation Flow...");

  const testEmail = `test_${Date.now()}@nikahkuy.xyz`;
  const testUsername = `user_${Date.now()}`;
  const testSlug = `test-wedding-${Date.now()}`;

  console.log(`1. Testing OTP Generation for email: ${testEmail}`);
  const { code } = await saveOtpToken({
    email: testEmail,
    action: "register",
    payload: {
      username: testUsername,
      email: testEmail,
      password: "password123",
      slug: testSlug,
      theme: "hwflower",
      mempelai: {
        nama_pria: "Ali bin Abi Thalib",
        nama_panggilan_pria: "Ali",
        nama_wanita: "Fatimah Az-Zahra",
        nama_panggilan_wanita: "Fatimah",
      },
    },
  });

  console.log(`✅ OTP Generated: ${code}`);

  console.log("2. Testing Email Sending (Resend / Dev Simulation)...");
  const emailRes = await sendOtpEmail({
    to: testEmail,
    code,
    userName: "Ali & Fatimah",
    action: "register",
  });
  console.log("✅ Email Send Result:", emailRes);

  console.log("3. Testing OTP Verification & Consumption...");
  const verifyRes = await verifyAndConsumeOtp({
    email: testEmail,
    code,
    action: "register",
  });
  console.log("✅ Verify Result:", verifyRes);

  if (!verifyRes.valid || !verifyRes.payload) {
    throw new Error("OTP Verification failed");
  }

  console.log("4. Simulating Account & Invitation Setup...");
  const newUser = await prisma.user.create({
    data: {
      email: testEmail,
      username: testUsername,
      password: "hashedpassword123",
      role: "user",
      status: 1,
    },
  });

  const newOrder = await prisma.order.create({
    data: {
      id_user: newUser.id,
      domain: testSlug,
      theme: "hwflower",
      id_paket: 1,
      status: 1,
    },
  });

  const newMempelai = await prisma.mempelai.create({
    data: {
      id_user: newUser.id,
      nama_pria: verifyRes.payload.mempelai.nama_pria,
      nama_panggilan_pria: verifyRes.payload.mempelai.nama_panggilan_pria,
      nama_ayah_pria: "Abu Thalib",
      nama_ibu_pria: "Fatimah binti Asad",
      nama_wanita: verifyRes.payload.mempelai.nama_wanita,
      nama_panggilan_wanita: verifyRes.payload.mempelai.nama_panggilan_wanita,
      nama_ayah_wanita: "Rasulullah SAW",
      nama_ibu_wanita: "Khadijah RA",
    },
  });

  console.log("✅ User created:", newUser.id, newUser.username);
  console.log("✅ Order created with slug:", newOrder.domain);
  console.log("✅ Mempelai created:", newMempelai.nama_pria, "&", newMempelai.nama_wanita);

  // Clean up test data
  await prisma.mempelai.deleteMany({ where: { id_user: newUser.id } });
  await prisma.order.deleteMany({ where: { id_user: newUser.id } });
  await prisma.user.delete({ where: { id: newUser.id } });
  console.log("🧹 Test cleanup completed!");

  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY!");
}

runTest()
  .catch((e) => {
    console.error("❌ Test failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
