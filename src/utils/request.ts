import { objectToQueryString } from './basic'
import { SERVER_HOST } from '../constants'
import { createSupabaseServerClient } from '@/lib/supabase'

type Method = 'get' | 'post' | 'put' | 'delete'

async function getToken() {
  const { data, error } = await createSupabaseServerClient().auth.getSession()
  if (!error && data.session?.access_token) {
    return data.session?.access_token
  }
  return null
}

function createServerRequest({
  method,
  baseUrl = ''
}: {
  method: Method
  baseUrl?: string
}) {
  return async <R = any>(
    url: string,
    data?: any,
    opt?: RequestInit
  ): Promise<R> => {
    url = `${baseUrl}${url}`

    if (method === 'get' && data && Object.keys(data).length) {
      url = `${url}?${objectToQueryString(data)}`
    }

    const headers: Record<string, any> = {
      'Content-Type': 'application/json',
      ...opt?.headers
    }

    const token = await getToken()
    if (token) {
      headers.authorization = `Bearer ${token}`
    }

    const body = method === 'get' || !data ? undefined : JSON.stringify(data)

    const options = {
      ...opt,
      method,
      headers,
      body
    }

    const res = await fetch(url, options)

    if (res.status === 200) {
      const json = await res.json()
      return json.data
    }

    throw new Error(res.statusText)
  }
}

const BASE_URL = '/api'
const createCommonRequestOptions = (method: Method) => {
  return {
    method,
    baseUrl: `${SERVER_HOST}${BASE_URL}`
  }
}

export const serverRequestGet = createServerRequest(
  createCommonRequestOptions('get')
)

export const serverRequestPut = createServerRequest(
  createCommonRequestOptions('put')
)

export const serverRequestDelete = createServerRequest(
  createCommonRequestOptions('delete')
)

export const serverRequestPost = createServerRequest(
  createCommonRequestOptions('post')
)
