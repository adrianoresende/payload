'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import { motion } from 'motion/react'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'

export const HighlightHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}{' '}
        <Highlight className="text-black dark:text-white">teste, teste, teste</Highlight>
      </motion.h1>

      {Array.isArray(links) && links.length > 0 && (
        <ul className="flex md:justify-center gap-4">
          {links.map(({ link }, i) => {
            return (
              <li key={i}>
                <CMSLink {...link} />
              </li>
            )
          })}
        </ul>
      )}
    </HeroHighlight>
  )
}

// {media && typeof media === 'object' && (
// <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
// )}
