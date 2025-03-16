'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'

export const DefaultHero: React.FC<Page['hero']> = ({
  links,
  media,
  badge,
  title,
  description,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          {badge && (
            <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
              {badge}
            </Badge>
          )}

          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            {title}
          </h1>

          {description && <p className="mt-6 max-w-[60ch] text-lg">{description}</p>}

          {Array.isArray(links) && links.length > 0 && (
            <div className="mt-12 flex items-center gap-4">
              {links.map(({ link }, i) => {
                return <CMSLink key={i} {...link} />
              })}
            </div>
          )}
        </div>

        {/* {media && media.type === 'upload' && media.upload && (
          <div className="w-full aspect-video bg-accent rounded-xl">
            <Media fill imgClassName="-z-10 object-cover" priority resource={media.upload} />
          </div>
        )}

        {media && media.type === 'youtube' && media.youtube && (
          <div className="w-full aspect-video bg-accent rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src={media.youtube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        )} */}
      </div>
    </div>
  )
}
