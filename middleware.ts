import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "pt";
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
