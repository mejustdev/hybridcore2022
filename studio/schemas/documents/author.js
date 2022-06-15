import { IoMdPerson } from 'react-icons/io';
export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: IoMdPerson,
  fields: [
    // create a slug field  for the author's name
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: "Automatically generate from the author's name",
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning('Please only click the button without typing for now'),
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'bio',
    //   type: 'bioPortableText',
    //   title: 'Biography',
    // },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
