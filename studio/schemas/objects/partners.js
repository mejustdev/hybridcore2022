export default {
  type: 'object',
  name: 'partners',
  title: 'Partners',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      type: 'array',
      name: 'logos',
      title: 'Logos',
      of: [{ type: 'logo' }],
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
