//File name: link.js
//File location: schemas/objects

export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
    },
    // {
    //   title: 'Has it parent menu item?',
    //   name: 'hasParentMenuItem',
    //   type: 'boolean',
    // },
    // {
    //   title: 'Parent menu item',
    //   name: 'parentMenuItem',
    //   description: 'Select a parent menu item for this link',
    //   type: 'reference',
    //   to: [{ type: 'page' }],
    //   // hidden: ({ parent }) => parent?.hasParentMenuItem === false, // hidden if link type is not external
    // },
    {
      name: 'externalUrlText',
      title: 'External URL Text',
      description: 'This will be shown in the navigation',
      type: 'url',
      hidden: ({ parent }) => parent?.internalLink, // hidden if link type is internal
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
      hidden: ({ parent }) => parent?.internalLink, // hidden if link type is internal
    },
    {
      title: 'Do you want parent text in the navigation?',
      name: 'isParentText',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Parent Link',
      name: 'parentlink',
      description: 'Select parent pages for navigation',
      type: 'reference',
      to: [{ type: 'menuParentItem' }],
      hidden: ({ parent }) => parent?.isParentText === false, // hidden if link type is not external
    },
  ],
};
