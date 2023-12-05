'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TheNavProps = {
  links: { href: string; label: string }[]
}
export function TheNav(props: TheNavProps) {
  const { links = [] } = props
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`
              text-[20px] 
              ${pathname === href ? 'underline decoration-primary-color' : ''}
              `}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
