import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
  const session = await auth();
  console.log(session);
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/api/:path*",
};
