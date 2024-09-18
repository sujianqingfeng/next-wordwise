import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '~/lib/supabase'

export async function GET(
  request: Request,
  { params: { provider } }: { params: { provider: string } }
) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? ''

  if (code) {
    const supabase = createSupabaseServerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  return NextResponse.redirect(`/auth/${provider}/error`)
}
