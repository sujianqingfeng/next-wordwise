import { fetchProfileApi } from '@/api'
import TranslationForm from './components/TranslationForm'

export default async function Page() {
  const profile = await fetchProfileApi()

  return (
    <>
      <p className="text-lg font-bold">Translation providers</p>

      <TranslationForm profile={profile}></TranslationForm>
    </>
  )
}
