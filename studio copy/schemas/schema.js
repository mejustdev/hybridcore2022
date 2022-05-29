import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import comment from './comment'
import page from './page'
import hero from './hero'
import simpleBlockContent from './simpleBlockContent'

// Documents
import category from './documents/category'
import post from './documents/post'
import author  from './documents/author'
import menu  from './documents/menu'

// Objects
import bodyPortableText  from './objects/bodyPortableText'
import excerptPortableText  from './objects/excerptPortableText'
import bioPortableText  from './objects/bioPortableText'
import youtube  from './objects/youtube'
import instagram  from './objects/instagram'
import mainImage  from './objects/mainImage'
import menuItem  from './objects/menuItem'
import codepen  from './objects/codepen'



export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    post,
    category,
    author,
    comment,
    page,
    hero,
    simpleBlockContent,
    bodyPortableText,
    excerptPortableText,
    bioPortableText,
    mainImage,
    youtube,
    instagram,
    menu,
    menuItem,
    codepen

  ])
})
