import Logo from '@/app/components/logo'
import { fetchJsonByGet } from '../utils/fetch'
import type { AuthProvidersItemResp } from '../utils/fetch/types'
import AuthButton from './components/auth-button'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const providers =
    await fetchJsonByGet<AuthProvidersItemResp[]>('/auth/providers')

  return (
    <>
      <header className="h-[100px] flex items-center">
        <div className="pl-10">
          <Logo></Logo>
        </div>
      </header>

      <div className="flex justify-center">
        {providers.map((p) => {
          return <AuthButton key={p.provider} {...p} />
        })}
      </div>
    </>
  )
}
