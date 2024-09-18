import { createSupabaseServerClient } from '~/lib/supabase'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params: { provider } }: { params: { provider: string } }
) {
  const { origin } = new URL(request.url)
  const redirectTo = `${origin}/auth/${provider}/callback?next=/personal/dashboard`
  const { data, error } =
    await createSupabaseServerClient().auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo
      }
    })

  if (error) {
    return redirect(`/auth/${provider}/error`)
  }

  redirect(data.url)
}
