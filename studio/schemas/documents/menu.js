import { HiMenu } from 'react-icons/hi';

export default {
  name: 'menuParentItem',
  title: 'Menu',
  type: 'document',
  icon: HiMenu,
  fields: [
    {
      name: 'isParentText',
      type: 'boolean',
      title: 'Do you want parent text in the navigation?',
      readOnly: ({ document }) => document?.routesDirect,
    },
    // Yes
    {
      name: 'parentText',
      type: 'string',
      title: 'Parent Text',
      hidden: ({ parent }) => parent.isParentText === false,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Automatically generate from Parent Text',
      options: {
        source: 'parentText',
        maxLength: 96,
      },
      hidden: ({ parent }) => parent.isParentText === false,
      validation: (Rule) =>
        Rule.required().warning('Please only click the button without typing for now'),
    },
    {
      title: 'Menu Items',
      name: 'routesUnderParent',
      description: 'Select pages or enter URL for navigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'page' },
        },
        {
          type: 'object',
          title: 'External URL',
          fields: [
            {
              name: 'externalUrlText',
              title: 'Text',
              description: 'This will be shown in the navigation',
              type: 'string',
            },
            {
              name: 'externalUrl',
              title: 'External URL',
              description: 'Use fully qualified URLS for external link',
              type: 'url',
            },
          ],
        },
      ],
      hidden: ({ parent }) => parent.isParentText === false,
    },
    {
      title: 'Pages',
      name: 'routesDirect',
      description: 'Select pages or enter URL for navigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'page',
          },
        },
        {
          type: 'object',
          title: 'External URL',
          fields: [
            {
              name: 'externalUrlText',
              title: 'Text',
              description: 'This will be shown in the navigation',
              type: 'string',
            },
            {
              name: 'externalUrl',
              title: 'External URL',
              description: 'Use fully qualified URLS for external link',
              type: 'url',
            },
          ],
        },
      ],
      hidden: ({ parent }) => parent.isParentText === true,
    },
  ],
  initialValue: {
    isParentText: false,
  },
  preview: {
    select: {
      title: 'parentText',
      subtitle: 'parentText',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `${title ? title : 'Pages'}`,
        subtitle: `${title ? 'Parent Text' : 'Add your direct pages here'}`,
      };
    },
  },
};
