import { fetchJsonByPost } from "@/app/utils/fetch"
import { AuthReq } from "@/app/utils/fetch/types"

export async function GET(
  request: Request,
  { params }: { params: { provider: string } }
) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')!
  const provider = params.provider

  const res = await fetchJsonByPost<any,AuthReq>('/auth', {
    code,
    provider
  })
  return Response.json(res)
}
