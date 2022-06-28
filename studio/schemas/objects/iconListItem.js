export default {
  type: 'object',
  name: 'iconListItem',
  title: 'Icon list item',
  fields: [
    {
      name: 'icon',
      type: 'icon',
      title: 'Icon',
      hidden: ({ document }) => document?.title === 'Team',
    },
    {
      name: 'itemImage',
      type: 'mainImage',
      title: 'Image',
    },
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subHeader',
      type: 'simpleBlockContent',
      title: 'Subheader',
      hidden: ({ document }) => document?.title === 'Team',
    },
    {
      name: 'button',
      type: 'boolean',
      title: 'Do you want to add button for link/url?',
      initialValue: false,
    },
    {
      name: 'link',
      type: 'object',
      title: 'Button Link',
      fields: [
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Text',
        },
        {
          name: 'external',
          type: 'url',
          title: 'URL',
          description: 'Use fully qualified URLS for external link',
          hidden: ({ parent, value }) => !value && parent?.internal,
        },
        {
          name: 'internal',
          type: 'reference',
          to: [{ type: 'page' }],
          hidden: ({ parent, value }) => !value && parent?.external,
        },
      ],
      hidden: ({ parent }) => !parent.button,
    },

    {
      name: 'position',
      type: 'string',
      title: 'Position',
      hidden: ({ document }) => document?.title !== 'Team',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'header',
  //     media: 'image',
  //   },
  // },
};
