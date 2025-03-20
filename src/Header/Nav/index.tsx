'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo/Logo'
import { NavMobile } from '../NavMobile'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const navButtons = data?.navButtons || []

  return (
    <nav className="h-full flex items-center justify-between mx-auto px-4">
      <Link href="/">
        <Logo loading="eager" priority="high" className="invert dark:invert-0" />
      </Link>

      <div className="hidden md:block">
        <div className="group flex flex-1 list-none items-center justify-center gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} className="hover:text-primary" />
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {data.search && (
          <Button variant="outline">
            <Link href="/search">
              <span className="sr-only">Search</span>
              <SearchIcon className="w-5 text-primary" />
            </Link>
          </Button>
        )}
        {navButtons.map(({ link }, i) => {
          return <CMSLink key={i} {...link} className="rounded-full" />
        })}
        <div className="md:hidden">
          <NavMobile data={data} />
        </div>
      </div>
    </nav>
  )
}
