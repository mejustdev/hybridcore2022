export default {
  type: 'object',
  name: 'iconList',
  title: 'List with icons',
  fields: [
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
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'iconListItem' }],
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
