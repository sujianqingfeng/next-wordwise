import { useToast } from '@/components/ui/use-toast'
import { createSafePromise } from '@/utils/basic'
import { useEffect, useState } from 'react'

type FetchOptions<T, Q> = {
  defaultValue?: Partial<T>
  defaultQuery?: Partial<Q>
  autoFetch?: boolean
  errorAlertToast?: boolean
  apiFn: (query: any) => Promise<any>
  format?: (data: any) => T
  successCallback?: (data: T) => void
}

export function useFetch<T, Q = Record<string, any>>(
  options: FetchOptions<T, Q>
) {
  const {
    apiFn,
    format,
    autoFetch = true,
    errorAlertToast = true,
    defaultValue = {},
    defaultQuery = {},
    successCallback
  } = options
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<T>(defaultValue as T)

  // const fetchApi = async (query?: Partial<Q>) => {
  //   setLoading(true)
  //   const res = await apiFn({ ...defaultQuery, ...query })
  //   setResult(format ? format(res) : res)
  //   setLoading(false)
  //   successCallback && successCallback(res)
  //   return res as T
  // }

  const fetchApi = async (query?: Partial<Q>) => {
    const api = createSafePromise<T>(apiFn)
    setLoading(true)
    const res = await api({ ...defaultQuery, ...query })
    setLoading(false)
    const [isOk, dataOrError] = res
    if (!isOk) {
      if (errorAlertToast) {
        toast({
          description: dataOrError.message,
          variant: 'destructive'
        })
      }
      return res
    }
    setResult(format ? format(dataOrError) : dataOrError)
    successCallback && successCallback(dataOrError)
    return res
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
    const { data: list, total } = data
    setTotal(total)
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
    setResult(defaultValue as T)
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
