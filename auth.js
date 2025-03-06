import { getUserByEmail } from "@/data/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialsProvider({
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = getUserByEmail(credentials.email);
          if (user) {
            // match the password
            const isMatch = user?.password === credentials.password;
            if (isMatch) {
              return user;
            } else {
              throw new Error("Invalid Cradentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {}
      },
    }),
  ],
});
