import { cookies } from 'next/headers'

export async function fetchJson<R = any>(
  url: string,
  opt?: RequestInit
): Promise<R> {
  const baseUrl = process.env.SERVER_HOST

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  const headers: Record<string, any> = {
    ...opt?.headers
  }
  if (token) {
    headers.authorization = `Bearer ${token.value}`
  }
  try {
    const res = await fetch(`${baseUrl}${url}`, {
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
    }
  } catch (error) {
    console.error(error)
  }

  throw new Error('data maybe not correct')
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
