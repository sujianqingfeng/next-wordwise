export function useEnv() {
  const isServer = typeof document === 'undefined'
  return {
    isServer
  }
}
