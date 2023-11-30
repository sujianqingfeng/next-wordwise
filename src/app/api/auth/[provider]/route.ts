import { NextRequest, NextResponse } from 'next/server'
import { fetchAuthApi } from '@/api'

export async function GET(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')!
  const provider = params.provider

  const res = await fetchAuthApi({ code, provider })

  const response = NextResponse.redirect(
    new URL('/person/dashboard', request.nextUrl.origin),
    {
      status: 302
    }
  )
  response.headers.set(
    'Set-Cookie',
    `token=Bearer ${res.token}; Path=/; HttpOnly; SameSite=Strict;`
  )
  return response
}
