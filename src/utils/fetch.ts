import { API_PROXY, SERVER_HOST } from '../constants'

function getBaseUrl(url: string) {
  const isServer = typeof document === 'undefined'
  return isServer ? `${SERVER_HOST}${url}` : `${API_PROXY}${url}`
}

async function getTokenFromServer() {
  const { cookies } = await import('next/headers')
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  if (token) {
    return token.value
  }
  return null
}

async function fetchJson<R = any>(url: string, opt?: RequestInit): Promise<R> {
  const headers: Record<string, any> = {
    ...opt?.headers
  }

  const isServer = typeof document === 'undefined'
  if (isServer && !headers.authorization) {
    const token = await getTokenFromServer()
    if (token) {
      headers.authorization = token
    }
  }

  const finalUrl = getBaseUrl(url)

  try {
    const res = await fetch(finalUrl, {
      cache: 'no-cache',
      ...opt,
      headers
    })

    if (!res.ok) {
      const { status, url, statusText } = res
      throw new Error(
        `Failed to fetch data | url: ${url} | status: ${status} | statusText: ${statusText}`
      )
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

function fetchJsonByMethod(method: string) {
  return <R = any, T extends Record<string, any> = any>(
    url: string,
    data?: T,
    opt?: RequestInit
  ) => {
    return fetchJson<R>(url, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data),
      ...opt
    })
  }
}

export function fetchJsonByGet<R = any, T extends Record<string, any> = any>(
  url: string,
  data?: T,
  opt?: RequestInit
) {
  let query = new URLSearchParams(data).toString()
  if (query) {
    query = `?${query}`
  }
  const newUrl = `${url}${query}`
  return fetchJson<R>(newUrl, opt)
}

export const fetchJsonByPost = fetchJsonByMethod('POST')
export const fetchJsonByPut = fetchJsonByMethod('PUT')
export const fetchJsonByDelete = fetchJsonByMethod('DELETE')
