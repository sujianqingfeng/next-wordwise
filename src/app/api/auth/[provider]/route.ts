import { fetchJsonByPost } from '@/utils/fetch'
import type { AuthReq, Token } from '@/api/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')!
  const provider = params.provider

  const res = await fetchJsonByPost<Token, AuthReq>('/auth', {
    code,
    provider
  })

  const response = NextResponse.redirect(
    `${request.nextUrl.origin}/dashboard`,
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
