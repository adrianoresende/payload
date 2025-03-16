import type { ArrayField, Field } from 'payload'

import deepMerge from '@/utilities/deepMerge'

type MediaGroupType = (options?: { overrides?: Partial<ArrayField> }) => Field

export const mediaGroup: MediaGroupType = ({ overrides = {} } = {}) => {
  const generatedMediaGroup: Field = {
    name: 'media',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        name: 'media-type',
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
  }

  return deepMerge(generatedMediaGroup, overrides)
}
