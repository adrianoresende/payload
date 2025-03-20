'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo/Logo'
import { Menu } from 'lucide-react'

export const NavMobile: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const navButtons = data?.navButtons || []

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <div className="mt-12 gap-6 space-x-0 flex flex-col items-start">
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
          {navButtons.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
