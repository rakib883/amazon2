import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import clientPromise from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID !,
      clientSecret: process.env.GITHUB_SECRET !,
    }),
  ],
  adapter:MongoDBAdapter(clientPromise)
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
