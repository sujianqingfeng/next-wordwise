'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Bolt, House, TableProperties, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const IconMaps: Record<string, LucideIcon> = {
  Dashboard: House,
  Words: TableProperties,
  Profile: Bolt
}

type TheNavProps = {
  links: { href: string; label: string }[]
}
export function TheNav(props: TheNavProps) {
  const { links = [] } = props
  const pathname = usePathname()

  const renderIcon = (label: string) => {
    const Icon = IconMaps[label]
    if (!Icon) {
      return null
    }
    return <Icon />
  }

  return (
    <TooltipProvider>
      <nav className="flex flex-col justify-center items-center gap-3">
        <header className="flex justify-center items-center pt-4 pb-2">
          <p className="font-bold border rounded-full h-9 w-9 text-center leading-9">
            W
          </p>
        </header>

        {links.map(({ href, label }) => (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground',
                  pathname === href ? 'bg-accent' : ''
                )}
              >
                {renderIcon(label)}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  )
}
