import { connectToDB } from "@/lib/mongoDB";
import User from "@/models/user";

import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  try{
    await connectToDB();
    const {name, email, phoneNumber, password, confirmPassword} = await req.json();
    
    if(!name || !email || !phoneNumber || !password || !confirmPassword){
      return new Response(JSON.stringify({error: "Please fill all fields"}), {status: 400});
    }
   if(password !== confirmPassword){
    return new Response(JSON.stringify({error: "Passwords do not match"}), {status: 400});
   }
    const existEmail = await User.findOne({email});
    if(existEmail){
      return new Response(JSON.stringify({error: "Email already exists"}), {status: 400});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name, email, phoneNumber, password: hashedPassword
    })

    console.log("Registering user:", {name, email, phoneNumber, password: hashedPassword});
    return new Response(JSON.stringify({message: "User registered successfully"}), {status: 201});
  }
  catch(error){
    console.log(error);
    return new Response(JSON.stringify({error: "Internal Server Error"}), {status: 500});
  }}