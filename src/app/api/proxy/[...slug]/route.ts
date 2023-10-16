import { API_PROXY } from '@/app/constants'
import { useFetch } from '@/app/hooks/use-fetch'
import { NextRequest } from 'next/server'

function getFinalUrl(request: NextRequest) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getBaseUrl } = useFetch()
  const pathname = request.nextUrl.pathname
  const url = pathname.replace(API_PROXY + '/', '')
  const finalUrl = getBaseUrl(url)
  return finalUrl
}

async function getAuthHeaders() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getTokenFromServer } = useFetch()
  const token = await getTokenFromServer()
  return {
    authorization: `Bearer ${token}`
  }
}

export async function f(request: NextRequest, opt?: Partial<RequestInit>) {
  const finalUrl = getFinalUrl(request)
  const headers = await getAuthHeaders()

  const mergeHeaders = {
    ...headers,
    ...opt?.headers
  }

  const res = await fetch(finalUrl, { ...opt, headers: mergeHeaders })
  const json = await res.json()
  return Response.json(json)
}

export async function GET(request: NextRequest) {
  return f(request)
}

export async function POST(request: NextRequest) {
  return f(request, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: request.body
  })
}
