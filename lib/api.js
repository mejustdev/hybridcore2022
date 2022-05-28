import client, { previewClient } from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()

  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const categoryFields = `
  _id,title,
  "count": length(*[_type == "post" && references(^._id)])

`
const menuFields =`
{
  "url":{external,urlText},
  "link":internal-> {_id,title,"slug":slug.current}
}`

const allPostsFields = `
  _id,
  "slug":slug.current,
  title,
  subtitle,
  "categories": categories[]->title,
  publishedAt,
  _createdAt

`
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

`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
  const results = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  )
  return results[0]
}
export async function getMenu(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "menu"]{menuItems[]
      ${menuFields}
    }`)

  return results
}
export async function getAllCategories(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "category" && length(*[_type == "post" && references(^._id)]) > 0]{

      ${categoryFields}
    }`)

  return results
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
  } }`)

  return results
}
export async function getAllPosts(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${allPostsFields}
    }`)

  return getUniquePosts(results)
}

export async function getPost(slug, preview) {
  const curClient = await getClient(preview)

const results = curClient.fetch(`*[_type == 'post' && slug.current == $slug ] {
    'currentPost': {
      ${postFields}
    },
      'nextPost': *[_type == 'post' && publishedAt < ^.publishedAt] | order(publishedAt desc)[0] ,
       'previousPost': *[_type == 'post' && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]
  }`,{slug}).then(res => res?.[0])

  return results

}
