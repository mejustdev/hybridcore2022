//File name: navItem.js
//File location: schemas/objects
// import { GrNavigate } from "react-icons/gr";

export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    // icon: GrNavigate,
    fields: [
      {
        name: 'external',
        type: 'url',
        title: 'URL',
        hidden: ({ parent, value }) => !value && parent?.internal
      },
      {
        name: "urlText",
        type: "string",
        title: "URL Text",
        description: "This title will be shown in the navigation",
        hidden: ({ parent, value }) => !parent?.external
      },
      {
        name: 'internal',
        type: 'reference',
        title: 'Internal Link',
        to: [{ type: 'page' }],
        hidden: ({ parent, value }) => !value && parent?.external
      }
    ],
     preview: {
    select: {
      internalTitle: 'internal.title',
      externalTitle: 'urlText'
    },
    prepare(selection) {
      const {internalTitle, externalTitle} = selection
      return {
        title: internalTitle || externalTitle ,
      };
    },
  },
}