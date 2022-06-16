import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import post from './documents/post';
import author from './documents/author';
import menu from './documents/menu';
import page from './documents/page';
// import category from './documents/category';

// Objects
import bodyPortableText from './objects/bodyPortableText';
import excerptPortableText from './objects/excerptPortableText';
import bioPortableText from './objects/bioPortableText';
import mainImage from './objects/mainImage';
import icon from './objects/icon';
import logo from './objects/logo';
import menuItem from './objects/menuItem';
import textBlock from './objects/textBlock';
import textSlider from './objects/textSlider';
import link from './objects/link';
import hero from './objects/hero';
import iconList from './objects/iconList';
import partners from './objects/partners';
import iconListItem from './objects/iconListItem';
import simpleBlockContent from './objects/simpleBlockContent';
// import youtube from './objects/youtube';
// import instagram from './objects/instagram';
// import codepen from './objects/codepen';

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    author,
    post,
    page,
    hero,
    simpleBlockContent,
    bodyPortableText,
    excerptPortableText,
    bioPortableText,
    mainImage,
    icon,
    menu,
    menuItem,
    iconList,
    iconListItem,
    partners,
    logo,
    textBlock,
    textSlider,
    link,
    // category,
    // comment,
    // codepen,
    // youtube,
    // instagram,
  ]),
});
