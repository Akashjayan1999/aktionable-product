
import { NextRequest, NextResponse } from 'next/server';


interface RoutesInfo {
  [key: string]: string[];
}

export const routesInfo: RoutesInfo = {
  contraktai: ["projects"],
  adoptiq: ["projects"],
  medusaai: ["projects"]
};

export function middleware(request: NextRequest): NextResponse {
  const pathname: string = request.nextUrl.pathname;
  const segments: string[] = pathname.split('/').filter(Boolean);
  
 
  if (segments.length >= 2) {
    const [module, item]: [string, string] = [segments[0], segments[1]];
    
 
    if (routesInfo.hasOwnProperty(module)) {
      const allowedItems: string[] = routesInfo[module];
      

      if (!allowedItems.includes(item as string)) {
        return NextResponse.rewrite(new URL('/404', request.url));
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