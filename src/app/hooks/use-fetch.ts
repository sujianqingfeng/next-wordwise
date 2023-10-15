import { API_PROXY, SERVER_HOST } from '../constants'
import { useEnv } from './use-env'

export function useFetch() {
  const { isServer } = useEnv()

  const getBaseUrl = (url: string) => {
    return isServer ? `${SERVER_HOST}/${url}` : `${API_PROXY}/${url}`
  }

  const getTokenFromServer = async () => {
    const { cookies } = await import('next/headers')
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (token) {
      return token.value
    }
    return null
  }

  return {
    getBaseUrl,
    getTokenFromServer
  }
}
