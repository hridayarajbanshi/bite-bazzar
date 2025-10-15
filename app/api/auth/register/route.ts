import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try{
    const {name, email, phoneNumber, password, password2} = await req.json();
    if(!name || !email || !phoneNumber || !password || !password2){
      return new Response(JSON.stringify({error: "Please fill all fields"}), {status: 400});
    }
    if(password !== password2){
      return new Response(JSON.stringify({error: "Passwords do not match"}), {status: 400});
    }

    console.log("Registering user:", {name, email, phoneNumber});
  }
  catch(error){
    console.log(error);
    return new Response(JSON.stringify({error: "Internal Server Error"}), {status: 500});
  }}