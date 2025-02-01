import { ACCESS_TOKEN } from '@/api/constants'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get(ACCESS_TOKEN)
  const response = NextResponse.next()
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return response
  }

  if (pathname.startsWith('/admin/')) {
    if (!token) {
      const loginUrl = new URL('/admin', req.url)
      loginUrl.searchParams.set('err', 'unauthorized')
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
