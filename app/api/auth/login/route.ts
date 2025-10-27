import { connectToDB } from "@/lib/mongoDB";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectToDB();

    const { email, password } = await req.json();

    // ✅ Validate fields
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Please fill all fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ (Optional) remove sensitive data before sending response
    const safeUser = {
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
    console.log("✅ User logged in:", { id: user._id, email: user.email, name: user.name });
    return new Response(JSON.stringify({ message: "Login successful", user: safeUser }), {

      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );

   } catch (error) {
    console.error("❌ Login error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
