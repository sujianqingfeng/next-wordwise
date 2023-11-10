import { useEffect, useState } from 'react'

type FetchOptions<T, Q> = {
  defaultValue: T
  defaultQuery?: Partial<Q>
  apiFn: (query: any) => Promise<any>
  autoFetch?: boolean
  format?: (data: any) => T
}

export function useFetch<T, Q = Record<string, any>>(
  options: FetchOptions<T, Q>
) {
  const {
    apiFn,
    format,
    autoFetch = true,
    defaultValue,
    defaultQuery = {}
  } = options
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<T>(defaultValue)

  const fetchApi = async (query?: Partial<Q>) => {
    setLoading(true)
    const res = await apiFn({ ...defaultQuery, ...query })
    setResult(format ? format(res) : res)
    setLoading(false)
    return res as T
  }

  useEffect(() => {
    if (autoFetch) {
      fetchApi()
    }
  }, [])

  return {
    fetchApi,
    setResult,
    loading,
    result
  }
}

export function useFetchList<T extends any[], Q = Record<string, any>>(
  options: FetchOptions<T, Q> & {
    isStore?: boolean
  }
) {
  const {
    apiFn,
    format,
    autoFetch = true,
    defaultValue,
    defaultQuery = {},
    isStore = false
  } = options

  const [total, setTotal] = useState(0)
  const [isEnd, setEnd] = useState(false)

  const pageFormat = (data: any) => {
    const { list, total, isLast } = data
    setTotal(total)
    setEnd(isLast)
    let res = format ? format(list) : list
    if (isStore) {
      res = [...result, res]
    }
    return res
  }

  const { result, loading, fetchApi, setResult } = useFetch<T, Q>({
    apiFn,
    format: pageFormat,
    autoFetch,
    defaultValue,
    defaultQuery
  })

  const fetchListApi = async (query?: Partial<Q>) => {
    if (isEnd) {
      return
    }
    return fetchApi(query)
  }

  const clear = () => {
    setResult(defaultValue)
    setTotal(0)
    setEnd(false)
  }

  return {
    result,
    loading,
    total,
    isEnd,
    clear,
    fetchListApi
  }
}
