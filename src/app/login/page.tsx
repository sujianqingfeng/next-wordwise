import Logo from '@/components/Logo'
import AuthButton from './components/auth-button'
import { fetchAuthProvidersApi } from '@/api'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const providers = await fetchAuthProvidersApi()

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
