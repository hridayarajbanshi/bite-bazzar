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

        const user = await User.findOne({ email: credentials.email }).lean();

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

        // ✅ Return safe user object (NextAuth will attach this to token)
       return{
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
        };
      },
    }),
  ],

  // ✅ Use JWT strategy (required for credentials)
  session: { strategy: "jwt" },

  // ✅ JWT and Session callbacks to persist custom fields (like role)
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login", // ✅ optional: custom login page
  },

  secret: process.env.NEXTAUTH_SECRET,
};
