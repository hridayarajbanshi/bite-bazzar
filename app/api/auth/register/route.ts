import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, phoneNumber, password, password2 } = await request.json();

    // ✅ Validate fields
    if (!name || !email || !password || !password2) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // ✅ Check if passwords match
    if (password !== password2) {
      return NextResponse.json({ message: "Passwords do not match." }, { status: 400 });
    }

    // ✅ Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists." }, { status: 400 });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber: Number(phoneNumber),
        password: hashedPassword,
      },
    });

    console.log("✅ User created:", email);
    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Error registering user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
