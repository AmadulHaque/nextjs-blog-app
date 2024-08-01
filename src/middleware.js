import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";

// Auth Middleware: Protect certain routes
export async function middleware(req) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);

  const url = req.nextUrl.clone();
  const isLoggedIn = session.isLoggedIn;

  // Guest Middleware: Redirect authenticated users from login and register pages
  if ((url.pathname === '/login' || url.pathname === '/register') && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Auth Middleware: Redirect unauthenticated users from protected routes
  if ((url.pathname.startsWith('/protected') || url.pathname === '/dashboard') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/protected/:path*', '/dashboard', '/login', '/register'],
};
