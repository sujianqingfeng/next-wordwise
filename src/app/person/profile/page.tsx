import { fetchProfileApi } from '@/api'
import TranslationForm from './components/TranslationForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ChangePwd from './components/ChangePwd'

export default async function Page() {
  const profile = await fetchProfileApi()

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Translation providers</CardTitle>
        </CardHeader>
        <CardContent>
          <TranslationForm profile={profile}></TranslationForm>
        </CardContent>
      </Card>

      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Change password</CardTitle>
        </CardHeader>
        <CardContent>
          <ChangePwd />
        </CardContent>
      </Card>
    </>
  )
}
