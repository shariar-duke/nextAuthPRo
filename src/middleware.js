import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/products/1/checkout", request.url));
}

export const config = {
  matcher: ["/products", "/dashboard"],
};
