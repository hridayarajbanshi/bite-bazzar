import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';


export const authOptions = {
providers: [
CredentialsProvider({
name: 'Credentials',
credentials: {
email: { label: 'Email', type: 'text' },
password: { label: 'Password', type: 'password' },
},
async authorize(credentials) {
if (!credentials) return null;
const { email, password } = credentials;
const user = await prisma.user.findUnique({ where: { email } });
if (!user) return null;


const isValid = await bcrypt.compare(password, user.password);
if (!isValid) return null;


// return a user object - NextAuth will include this in the session
return { id: user.id, name: user.name, email: user.email };
},
}),
],
session: { strategy: 'jwt' },
pages: {
signIn: '/login',
},
secret: process.env.NEXTAUTH_SECRET,
};


const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };