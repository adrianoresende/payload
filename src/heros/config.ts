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
    {
      name: 'media',
      type: 'group',
      admin: {
        hideGutter: true,
      },
      fields: [
        {
          name: 'type',
          type: 'radio',
          admin: {
            layout: 'horizontal',
            width: '50%',
          },
          defaultValue: 'upload',
          options: [
            {
              label: 'Media upload',
              value: 'upload',
            },
            {
              label: 'Youtube URL',
              value: 'youtube',
            },
          ],
        },
        // {
        //   name: 'upload',
        //   type: 'upload',
        //   admin: {
        //     condition: (_, siblingData) => siblingData?.type === 'upload',
        //   },
        //   label: 'Upload',
        //   relationTo: 'media',
        // },
        // {
        //   name: 'youtube',
        //   type: 'text',
        //   admin: {
        //     condition: (_, siblingData) => siblingData?.type === 'youtube',
        //   },
        //   label: 'Youtube URL',
        // },
      ],
    },
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
