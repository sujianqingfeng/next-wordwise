import { API_PROXY, SERVER_HOST } from '../../constants'
import { useEnv } from './use-env'

export function useFetch() {
  const { isServer } = useEnv()

  function getBaseUrl(url: string) {
    return isServer ? `${SERVER_HOST}${url}` : `${API_PROXY}/${url}`
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

  async function fetchJson<R = any>(
    url: string,
    opt?: RequestInit
  ): Promise<R> {
    const headers: Record<string, any> = {
      ...opt?.headers
    }

    if (isServer) {
      const token = getTokenFromServer()
      if (token) {
        headers.authorization = `Bearer ${token}`
      }
    }

    const finalUrl = getBaseUrl(url)
    console.log('🚀 ~ file: use-fetch.ts:37 ~ useFetch ~ finalUrl:', finalUrl)

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

  function fetchJsonByGet<R = any, T extends Record<string, any> = any>(
    url: string,
    data?: T,
    opt?: RequestInit
  ) {
    const newUrl = `${url}${new URLSearchParams(data).toString()}`
    return fetchJson<R>(newUrl, opt)
  }

  function fetchJsonByPost<R = any, T extends Record<string, any> = any>(
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

  function fetchJsonByPut<R = any, T extends Record<string, any> = any>(
    url: string,
    data?: T,
    opt?: RequestInit
  ) {
    return fetchJson<R>(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data),
      ...opt
    })
  }

  return {
    getBaseUrl,
    getTokenFromServer,
    fetchJsonByGet,
    fetchJsonByPost,
    fetchJsonByPut
  }
}
