import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "")
    .split(",")[0]
    .trim()
    .toLowerCase();

  // Enforce canonical apex domain via permanent 301 redirect (www -> non-www)
  if (host === "www.technaviatechnology.com" || host.startsWith("www.technaviatechnology.com:")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https";
    redirectUrl.hostname = "technaviatechnology.com";
    redirectUrl.port = "";
    return NextResponse.redirect(redirectUrl, 301);
  }

  const isProduction =
    host === "technaviatechnology.com" || host === "www.technaviatechnology.com";
  const isLocalhost =
    host.startsWith("localhost") || host.startsWith("127.0.0.1");

  const response = NextResponse.next();

  // If request is served from any domain other than production (e.g. *.vercel.app, staging branches),
  // inject X-Robots-Tag to strictly prevent search engine indexing of staging environments.
  if (!isProduction && !isLocalhost) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg, public images
     */
    "/((?!_next/static|_next/image|favicon\\.ico|icon\\.svg|icon-.*\\.png|apple-touch-icon\\.png|images).*)",
  ],
};
