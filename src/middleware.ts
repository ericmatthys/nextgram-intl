import {NextRequest, NextResponse} from "next/server";

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

export function middleware(request: NextRequest) {
    if (!request.nextUrl.pathname.startsWith('/en')) {
        return NextResponse.rewrite(new URL('/en' + request.nextUrl.pathname, request.url))
    }
}