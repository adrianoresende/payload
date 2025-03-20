import type { GlobalConfig } from 'payload'

export const Theme: GlobalConfig = {
  slug: 'theme',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'themeRadio',
      type: 'radio',
      options: [
        {
          label: 'None',
          value: '0',
        },
        {
          label: 'Light',
          value: '4px',
        },
        {
          label: 'Medium',
          value: '8px',
        },
        {
          label: 'Larger',
          value: '12px',
        },
        {
          label: 'Full',
          value: '999px',
        },
      ],
      defaultValue: '4px',
    },
  ],
}
