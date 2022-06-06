import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import comment from './comment';

import hero from './hero';
import iconList from './iconList';
import partners from './partners';
import iconListItem from './iconListItem';
import simpleBlockContent from './simpleBlockContent';

// Documents
import category from './documents/category';
import post from './documents/post';
import author from './documents/author';
import menu from './documents/menu';
import page from './documents/page';

// Objects
import bodyPortableText from './objects/bodyPortableText';
import excerptPortableText from './objects/excerptPortableText';
import bioPortableText from './objects/bioPortableText';
import youtube from './objects/youtube';
import instagram from './objects/instagram';
import mainImage from './objects/mainImage';
import icon from './objects/icon';
import logo from './objects/logo';
import menuItem from './objects/menuItem';
import codepen from './objects/codepen';
import textBlock from './objects/textBlock';
import link from './objects/link';

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
    icon,
    youtube,
    instagram,
    menu,
    menuItem,
    codepen,
    iconList,
    iconListItem,
    partners,
    logo,
    textBlock,
    link,
  ]),
});
