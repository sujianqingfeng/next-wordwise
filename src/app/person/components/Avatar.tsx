import type { UserResp } from '@/api/types'
import Image from 'next/image'

type AvatarProps = {
  user: UserResp
}
export function Avatar(props: AvatarProps) {
  const { name, avatar } = props.user

  if (avatar) {
    return <Image src={avatar} alt="avatar" height={20} width={20} />
  }

  return (
    <div className="h-[26px] w-[26px] bg-primary-color text-white rounded-full flex justify-center items-center">
      {name?.charAt(0) || 'U'}
    </div>
  )
}
