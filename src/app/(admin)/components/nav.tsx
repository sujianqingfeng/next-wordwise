'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// TODO:
const links = ['dashboard', 'words', 'profile'].map((s) => ({
  href: `/${s}`,
  label: s.charAt(0).toUpperCase() + s.slice(1)
}))

export function Nav() {
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
