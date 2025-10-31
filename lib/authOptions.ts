import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/mongoDB";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password");
        }

        await connectToDB();

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        }

        // ✅ Return minimal safe user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
     
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = (user as any).role;
        token.phoneNumber = (user as any).phoneNumber;
      }
      return token;
    },

    async session({ session, token }) {
      // ✅ Expose token fields to session.user
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        (session.user as any).role = token.role;
        (session.user as any).phoneNumber = token.phoneNumber;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
