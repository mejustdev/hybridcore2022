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

// Menu query
// *[_type == "menu"]{
//   menuItems[]{"external":link.external,"internal":link.internal->{title,"slug":slug.current}


//              }
// }

const menuFields =`
{
  "url":{external,urlText},
  "link":internal-> {_id,title,"slug":slug.current}
}`

const homePostFields = `
  _id,
  "slug":slug.current,
  title,
  subtitle
`
const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  "relatedPosts":relatedPosts[]->{_id,title,subtitle,"slug":slug.current},
  "categories": categories[]->title,
  'author': author->{name, 'picture': image.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  )
  return data[0]
}
export async function getMenu(preview) {
  const data = await getClient(preview)
    .fetch(`*[_type == "menu"]{menuItems[]
      ${menuFields}
    }`)
  return data
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}
export async function getAllHomePosts(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${homePostFields}
    }`)
  return getUniquePosts(results)
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
    // console.log('RESULTS',results);
  return getUniquePosts(results)
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  // console.log(postFields);
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        excerpt,
        'comments': *[
                      _type == "comment" &&
                      post._ref == ^._id &&
                      approved == true] {
          _id,
          name,
          email,
          comment,
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
