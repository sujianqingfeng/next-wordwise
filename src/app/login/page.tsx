import { fetchJsonByGet } from '../utils/fetch'
import type { AuthProvidersItemResp } from '../utils/fetch/types'
import AuthButton from './components/auth-button'

export default async function Page() {
  const providers = await fetchJsonByGet<AuthProvidersItemResp[]>('/auth/providers')

  return (
    <div>
      {
        providers.map(p=>{
          return <AuthButton key={p.provider} {...p} />
        })
      }
    </div>
  )
}
