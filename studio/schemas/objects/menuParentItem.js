//File name: navItem.js
//File location: schemas/objects
// import { GrNavigate } from "react-icons/gr";

export default {
  name: 'menuParentItem',
  title: 'Menu Parent Text',
  type: 'document',
  // icon: GrNavigate,
  fields: [
    {
      name: 'isParentText',
      type: 'boolean',
      title: 'Do you want parent text in the navigation?',
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
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'parentText',
      },
      hidden: ({ parent }) => parent.isParentText === false,
    },
    {
      title: 'Pages',
      name: 'routesUnderParent',
      description: 'Select pages for navigation',
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
    // No
    {
      title: 'Menu Items',
      name: 'routesDirect',
      description: 'Select pages for navigation',
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
  ],
  preview: {
    select: {
      title: 'isParentText' ? 'parentText' : 'routesDirect.title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
