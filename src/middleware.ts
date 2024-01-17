import { NextResponse, NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const tokenStr = request.cookies.get('token')?.value

  const [type, token] = tokenStr?.split(' ') ?? []

  let isOk = false
  if (type === 'Bearer') {
    try {
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET as string)
      )
      isOk = true
    } catch (error) {}
  }

  if (!isOk) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/person/:path*']
}
