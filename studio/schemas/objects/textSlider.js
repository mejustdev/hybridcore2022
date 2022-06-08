// import { RiFileTextLine } from 'react-icons/ri';

export default {
  title: 'Text Slider',
  name: 'textSlider',
  type: 'object',
  // icon: RiFileTextLine,
  fields: [{ title: 'Text', name: 'text', type: 'array', of: [{ type: 'textBlock' }] }],
  preview: {
    prepare() {
      return {
        title: `Text `,
      };
    },
  },
};
