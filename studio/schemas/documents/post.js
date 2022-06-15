import { format } from 'date-fns';
import sanityClient from 'part:@sanity/base/client';
const client = sanityClient.withConfig({ apiVersion: '2021-03-25' });

import { MdPostAdd } from 'react-icons/md';
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdPostAdd,
  //   validation: Rule => Rule.custom(async () => {

  //     const result = await client.fetch(`count(*[ _type == 'post' && isHighlighted && !(_id in path("drafts.**")) ])  <= 3`)

  // return result ? true : "You can select maximum 3 featured post, please check highligted posts number"
  //   }),

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Automatically generate from Title of the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      hidden: ({ parent }) => parent.isParentText === false,
      validation: (Rule) =>
        Rule.required().warning('Please only click the button without typing for now'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'excerptPortableText',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    // {
    //   title: 'Related Posts',
    //   name: 'relatedPosts',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'post' } }],
    // },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'category' } }],
    // },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new->old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title = 'No title', publishedAt, media }) {
      const dateSegment = format(new Date(publishedAt), 'd/M/yy');
      const path = `${dateSegment}`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date',
      };
    },
  },
};
