// import { RiFileTextLine } from 'react-icons/ri';

export default {
  title: 'Text',
  name: 'textBlock',
  description: 'Simple text block',
  type: 'object',
  // icon: RiFileTextLine,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { value: 'strong', title: 'Strong' },
              { value: 'italic', title: 'Italic' },
              { value: 'underline', title: 'Underline' },
            ],
            // annotations: [{ type: 'link' }],
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Text `,
      };
    },
  },
};
