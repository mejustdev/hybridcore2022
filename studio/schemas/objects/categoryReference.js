export default {
  name: "categoryReference",
  type: "object",
  title: "Category reference",
  fields: [
    {
      name: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "category.title",
    },
  },
};