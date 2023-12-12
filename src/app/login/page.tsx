import Logo from '@/components/Logo'
import AuthButton from './components/auth-button'
import { fetchAuthProvidersApi } from '@/api'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const providers = await fetchAuthProvidersApi()

  return (
    <>
      <header className="h-[60px] md:h-[100px] text-slate-700 dark:text-slate-200">
        <div className="h-full px-2 max-w-7xl mx-auto flex justify-start items-center">
          <Logo></Logo>
        </div>
      </header>

      <div className="flex justify-center items-center max-w-7xl mx-auto px-2 pt-10">
        {providers.map((p) => {
          return <AuthButton key={p.provider} {...p} />
        })}
      </div>
    </>
  )
}
