import { NextRequest, NextResponse } from 'next/server';

interface RoutesInfo {
  [key: string]: {
    [key: string]: string[] | null;
  };
}

export const routesInfo: RoutesInfo = {
  contraktai: {
    projects: null,
    "completed-projects": null,
    "ai-lawyer": null,
    requests: ["review"],
  },
  adoptiq: {
    projects: null,
    chats: null,
    "actionable-bot": null,
    "create-projects": null,
  },
  medusaai: {
    projects: null,
  },
};

export function middleware(request: NextRequest): NextResponse {
  const pathname: string = request.nextUrl.pathname;
  const segments: string[] = pathname.split('/').filter(Boolean);

  if (segments.length >= 2) {
    const [module, item, third] = segments;

    if (routesInfo.hasOwnProperty(module)) {
      const allowedItems = routesInfo[module];
      if (!allowedItems.hasOwnProperty(item)) {
        return NextResponse.rewrite(new URL('/404', request.url));
      }

    
      const allowedThird = allowedItems[item];
      if (Array.isArray(allowedThird) && third) {
        if (!allowedThird.includes(third)) {
          return NextResponse.rewrite(new URL('/404', request.url));
        }
      }
     
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};