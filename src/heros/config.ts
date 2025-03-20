import type { Field } from 'payload'

import { linkGroup } from '@/fields/linkGroup'
import { mediaGroup } from '@/fields/mediaGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'default',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Highlight Dots',
          value: 'highlight',
        },
        {
          label: 'Default',
          value: 'default',
        },
      ],
      required: true,
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    mediaGroup(),
  ],
  label: false,
}

// {
//   name: 'richText',
//   type: 'richText',
//   editor: lexicalEditor({
//     features: ({ rootFeatures }) => {
//       return [
//         ...rootFeatures,
//         HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
//         FixedToolbarFeature(),
//         InlineToolbarFeature(),
//       ]
//     },
//   }),
//   label: false,
// },
