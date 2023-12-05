'use client'

import { fetchUserApi } from '@/api'
import { UserResp } from '@/api/types'
import DarkModeButton from '@/components/DarkModeButton'
import { useFetch } from '@/hooks/use-fetch'
import { usePathname } from 'next/navigation'
import { Avatar } from './Avatar'

type TheHeaderProps = {
  links: { href: string; label: string }[]
}
export function TheHeader(props: TheHeaderProps) {
  const { links } = props
  const pathname = usePathname()

  const title = links.find((link) => link.href === pathname)?.label

  const { result: user } = useFetch<UserResp>({
    apiFn: fetchUserApi,
    defaultValue: {}
  })

  return (
    <div className="px-2 h-10 flex justify-between items-center">
      <div className="text-lg font-bold">{title}</div>

      <div className="flex justify-start items-center gap-x-4">
        <Avatar user={user} />
        <DarkModeButton />
      </div>
    </div>
  )
}
