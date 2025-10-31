import { connectToDB } from "../lib/mongoDB";
import User from "../models/user"

async function main() {
  await connectToDB();
  const existing = await User.findOne({ email: "hridayabc012@gmail.com" });
  if (existing) {
    console.log("Admin exists");
    process.exit(0);
  }
  const admin = new User({ fullName: "Hridaya", email: "hridayabc012@gmail.com", password: process.env.ADMIN_PWD, role: "admin" });
  await admin.save();
  console.log("Admin created");
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
