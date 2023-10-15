import { API_PROXY } from '@/app/constants'
import { useFetch } from '@/app/hooks/use-fetch'
import { fetchJsonByGet, fetchJsonByPost } from '@/app/utils/fetch'
import { AuthReq, Token } from '@/app/utils/fetch/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const url = pathname.replace(API_PROXY + '/', '')
  const { getBaseUrl, getTokenFromServer } = useFetch()
  const token = await getTokenFromServer()
  const res = await fetch(getBaseUrl(url), {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const json = await res.json()

  return Response.json(json)
}
