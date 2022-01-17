import { format } from "date-fns";
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({ apiVersion: '2022-01-16' })

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
//   validation: Rule => Rule.custom(async () => {

//     const result = await client.fetch(`count(*[ _type == 'post' && isHighlighted && !(_id in path("drafts.**")) ])  <= 3`)

// return result ? true : "You can select maximum 3 featured post, please check highligted posts number"
//   }),

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'excerptPortableText',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      title: 'Related Posts',
      name: 'relatedPosts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    },
    // {
    //   name: 'isHighlighted',
    //   title: 'Do you want to highlight?',
    //   type: 'boolean',
    //   initialValue: false
    // },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      media: "mainImage",

    },
    prepare({ title = "No title", publishedAt, media }) {
      const dateSegment = format(new Date(publishedAt), "d/M/yy");
      const path = `${dateSegment}`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
}
