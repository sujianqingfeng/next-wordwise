export async function fetchJson<R = any>(
  url: string,
  opt?: RequestInit
): Promise<R> {
  const baseUrl = process.env.SERVER_HOST
  const res = await fetch(`${baseUrl}${url}`, {
    ...opt
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const json = await res.json()
  const { data, code = 0 } = json

  if (code === 0) {
    return data
  }

  throw new Error('data maybe not correct')
}

export function fetchJsonByGet<R = any, T extends Record<string, any> = any>(
  url: string,
  data?: T,
  opt?: RequestInit
) {
  // TODO: 未完成
  return fetchJson<R>(url, opt)
}

export function fetchJsonByPost<R = any, T extends Record<string, any> = any>(
  url: string,
  data?: T,
  opt?: RequestInit
) {
  return fetchJson<R>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data),
    ...opt
  })
}
