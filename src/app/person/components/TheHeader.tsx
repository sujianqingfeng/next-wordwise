'use client'

import { fetchUserApi } from '@/api'
import { UserResp } from '@/api/types'
import DarkModeButton from '@/components/DarkModeButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useFetch } from '@/hooks/use-fetch'
import { usePathname } from 'next/navigation'

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
    <div className="px-2 h-[60px] flex justify-between items-center border-b">
      <div className="text-lg font-bold">{title}</div>

      <div className="flex justify-start items-center gap-x-4">
        <DarkModeButton />
        <Avatar>
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user?.name?.substring(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
