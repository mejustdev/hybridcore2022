import client, { previewClient } from './sanity';

const getUniquePosts = (posts) => {
  const slugs = new Set();

  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const categoryFields = `
  _id,title,
  "count": length(*[_type == "post" && references(^._id)])

`;
// {menuItems[]{navigationItemUrl
//   {...,internalLink->{_id,title,'slug': slug.current}}
//   }}
const menuFields = `


{

  defined(routesDirect) => {routesDirect[]->{_id, title , 'slug': slug.current}},
 defined(parentText) =>
 {parentText,routesUnderParent[] {
  _type == 'reference' => @->{_id, title , 'slug': slug.current},
  _type != 'reference' => @
}

}
}


`;

const allPostsFields = `
  _id,
  "slug":slug.current,
  title,
  subtitle,
  excerpt[0],
  "categories": categories[]->title,
  publishedAt,
  _createdAt,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},

`;
const postFields = `
  _id,
  name,
  title,
  excerpt,
  body,
  'publishDate': publishedAt,
  'updatedDate': _updatedAt,
  'createdAt': _createdAt,
  'slug': slug.current,
  'coverImage': mainImage,
  "relatedPosts":relatedPosts[]->{_id,title,subtitle,"slug":slug.current},
  "categories": categories[]->title,
  'author': author->{name, 'picture': image.asset->url},
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
   body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug.current
      }
    }
  }

`;

const reusableBlocks = `
*[_type == "page"][title == "Home"][0]
`;
const reusableBlocksSmartSonar = `
*[_type == "page"][title == "Smart Sonar"][0]
`;
const reusableBlocksSmartNavigator = `
*[_type == "page"][title == "Smart Navigator"][0]
`;
const partners = `
*[_type == "page"][title == "Home"] {partners}[0]
`;
const teams = `
*[_type == "page"][title == "Team"][0]
`;
const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const results = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug },
  );
  return results[0];
}
export async function getMenu(preview) {
  const results = await getClient(preview).fetch(`*[_type == "menuParentItem"]
      ${menuFields}
    `);

  return results;
}

export async function getReusableBlocks(preview) {
  const results = await getClient(preview).fetch(reusableBlocks);
  return results;
}
export async function getReusableBlocksSmartSonar(preview) {
  const results = await getClient(preview).fetch(reusableBlocksSmartSonar);
  return results;
}
export async function getReusableBlocksSmartNavigator(preview) {
  const results = await getClient(preview).fetch(reusableBlocksSmartNavigator);
  return results;
}
export async function getTeams(preview) {
  const results = await getClient(preview).fetch(teams);
  return results;
}
export async function getPartners(preview) {
  const results = await getClient(preview).fetch(partners);
  return results;
}
export async function getAllCategories(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "category" && length(*[_type == "post" && references(^._id)]) > 0]{

      ${categoryFields}
    }`);

  return results;
}

export async function getAllPostsWithSlug() {
  const results = await client.fetch(`*[_type == "post"]{ 'slug': slug.current,body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug.current
      }
    }
  } }`);

  return results;
}
export async function getAllPosts(preview) {
  const results = await getClient(preview).fetch(`*[_type == "post"] | order(publishedAt desc){
      ${allPostsFields}
    }`);

  return getUniquePosts(results);
}

export async function getPost(slug, preview) {
  const curClient = await getClient(preview);

  const results = curClient
    .fetch(
      `*[_type == 'post' && slug.current == $slug ] {
    'currentPost': {
      ${postFields}
    },
      'nextPost': *[_type == 'post' && publishedAt < ^.publishedAt] | order(publishedAt desc)[0] ,
       'previousPost': *[_type == 'post' && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]
  }`,
      { slug },
    )
    .then((res) => res?.[0]);

  return results;
}
