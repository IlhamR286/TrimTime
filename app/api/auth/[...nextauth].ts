import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
  {
    id: "1",
    email: "admin@example.com",
    name: "Admin",
    password: bcrypt.hashSync("password", 10),
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        if (!credentials) return null;

        const user = users.find(u => u.email === credentials.email);
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return user;
        }
        return null;
      }
    }),
  ],
  session: { strategy: "jwt" },
  pages: { 
    signIn: "/login",
    error: "/login",
  },
} satisfies NextAuthOptions); // optional typing

export { handler as GET, handler as POST };