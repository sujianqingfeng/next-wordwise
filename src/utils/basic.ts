export function createSafePromise<R = any, T extends any[] = any[]>(
  promiseFn: (...rest: T) => Promise<R>
) {
  if (typeof promiseFn !== 'function') {
    throw new Error('createSafePromise: promiseFn must be a function')
  }
  return async (
    ...rest: Parameters<typeof promiseFn>
  ): Promise<[true, R] | [false, any]> => {
    try {
      const data = await promiseFn(...rest)
      return [true, data]
    } catch (error) {
      return [false, error]
    }
  }
}

export function queryStringToObject(queryString: string) {
  if (queryString.startsWith('?') || queryString.startsWith('#')) {
    queryString = queryString.slice(1)
  }

  const params = new URLSearchParams(queryString)
  const obj: Record<string, string> = {}
  for (const [key, value] of params) {
    obj[key] = value
  }
  return obj
}

export function objectToQueryString(obj: Record<string, any>) {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&')
}
