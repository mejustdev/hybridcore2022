//File name: navigation.js
//File location: schemas/documents

// import { GrNavigate } from "react-icons/gr";

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  // icon: GrNavigate,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'menuId',
      type: 'slug',
      title: 'Menu Id',
    },
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [{ type: 'menuItem' }],
    },
  ],
};
