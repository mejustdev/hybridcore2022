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
    },

    // {
    //   name: 'tagline',
    //   type: 'simpleBlockContent',
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'heading',
  //     subtitle: 'label',
  //     disabled: 'disabled',
  //   },
  //   prepare({ title, disabled }) {
  //     return {
  //       title: `Hero: ${disabled ? 'DISABLED' : title}`,
  //     };
  //   },
  // },
};
