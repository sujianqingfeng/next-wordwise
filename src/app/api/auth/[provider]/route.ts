export async function GET(
  request: Request,
  { params }: { params: { provider: string } }
) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  console.log('🚀 ~ file: route.ts:7 ~ code:', code)
  const provider = params.provider
  console.log('🚀 ~ file: route.ts:6 ~ slug:', provider)
  const baseUrl = process.env.SERVER_HOST
  const res = await fetch(`${baseUrl}/auth`)
  const data = await res.json()
  return Response.json({ data })
}
