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
    data?: Record<string, any>,
    opt?: RequestInit
  ): Promise<R> => {
    url = `${baseUrl}${url}`

    if (method === 'get' && data && Object.keys(data).length) {
      url = `${url}?${objectToQueryString(data)}`
    }

    const headers: Record<string, any> = {
      ...opt?.headers
    }

    const token = await getToken()
    if (token) {
      headers.authorization = `Bearer ${token}`
    }

    const body =
      method === 'get' || !data ? undefined : new URLSearchParams(data)

    const res = await fetch(`${SERVER_HOST}${url}`, {
      ...opt,
      method,
      headers,
      body
    })

    if (res.status === 200) {
      const json = await res.json()
      return json.data
    }

    throw new Error('Request failed')
  }
}

const BASE_URL = '/api'
const createCommonRequestOptions = (method: Method) => {
  return {
    method,
    baseUrl: BASE_URL
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
