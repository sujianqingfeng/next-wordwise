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
