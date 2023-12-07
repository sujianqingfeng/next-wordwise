import { NextResponse, NextRequest } from 'next/server'
import { fetchUserApi } from './api'
import { createSafePromise } from './utils/basic'

export async function middleware(request: NextRequest) {
  const safeFetchUserApi = createSafePromise(fetchUserApi)

  const token = request.cookies.get('token')?.value

  const [isOk] = await safeFetchUserApi({
    headers: {
      authorization: token ?? ''
    }
  })
  console.log('🚀 ~ file: middleware.ts:14 ~ middleware ~ isOk:', isOk)

  if (!isOk) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/person/:path*']
}
