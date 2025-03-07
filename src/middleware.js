import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { LOGIN, PUBLIC_ROUTES, ROOT } from "./lib/rotue";

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
  const { nextUrl } = request;
  console.log("the next url is", nextUrl);
  const session = await auth();
  console.log(session);

  // checking user authenctied or not it will give true or false value
  const isAuthenticated = !!session?.user;
  console.log(isAuthenticated, nextUrl.pathname);

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  console.log(isPublicRoute);

  // check wether I am logged in or not and it is public route or not

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(LOGIN, nextUrl));
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
