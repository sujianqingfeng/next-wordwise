import { API_PROXY, SERVER_HOST } from '@/app/constants'

export async function fetchJson<R = any>(
  url: string,
  opt?: RequestInit
): Promise<R> {
  const headers: Record<string, any> = {
    ...opt?.headers
  }

  let finalUrl = `${SERVER_HOST}${url}`
  if (typeof document === 'undefined') {
    const { cookies } = await import('next/headers')
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (token) {
      headers.authorization = `Bearer ${token.value}`
    }
  } else {
    finalUrl = `${API_PROXY}/${url}`
  }

  try {
    const res = await fetch(finalUrl, {
      cache: 'no-cache',
      ...opt,
      headers
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const json = await res.json()
    const { data, code = 0 } = json

    if (code === 0) {
      return data
    } else {
      throw new Error('data maybe not correct')
    }
  } catch (error) {
    throw error
  }
}

export function fetchJsonByGet<R = any, T extends Record<string, any> = any>(
  url: string,
  data?: T,
  opt?: RequestInit
) {
  const newUrl = `${url}${new URLSearchParams(data).toString()}`
  return fetchJson<R>(newUrl, opt)
}

export function fetchJsonByPost<R = any, T extends Record<string, any> = any>(
  url: string,
  data?: T,
  opt?: RequestInit
) {
  return fetchJson<R>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data),
    ...opt
  })
}
