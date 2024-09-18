'use client'

import { fetchUser } from '~/actions/user'
import type { UserResp } from '~/api/types'
import DarkModeButton from '~/components/DarkModeButton'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type TheHeaderProps = {
  links: { href: string; label: string }[]
}
export function TheHeader(props: TheHeaderProps) {
  const { links } = props
  const pathname = usePathname()

  const title = links.find((link) => link.href === pathname)?.label

  const [user, setUser] = useState<UserResp>({
    name: '',
    email: ''
  })

  useEffect(() => {
    const updateUser = async () => {
      const user = await fetchUser()
      setUser(user)
    }
    updateUser()
  }, [])

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
