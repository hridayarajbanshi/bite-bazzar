import { NextResponse as nextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import clientPromise from '@/lib/mongoDB';
export async function POST(request: Request) {
    try{
        const {name, email,phoneNumber, password, password2} = await request.json();
        const prisma = new PrismaClient();
        await prisma.user.create({
            data: {
                name,
                email,
                phoneNumber,
                password,
                password2
            }
        })
       
        console.log("Registering user:", {name, email,phoneNumber, password, password2});
        return nextResponse.json({message: 'User registered successfully'}, {status: 200});
    }catch(error){
        return nextResponse.json({message: 'Error registering user'}, {status: 500});
    }
}