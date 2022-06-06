export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'simpleBlockContent',
      title: 'Subtitle',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image',
    },
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
