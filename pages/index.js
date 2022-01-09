import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome,getAllHomePosts, getMenu } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

export default function Index({ allPosts,menu, preview }) {

  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview} menu={menu}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              categories={heroPost.categories}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          {/* TODO: Post Card */}
          <ul>
          {allPosts.map(({_id,slug,title,subtitle}) => (
            <li key={_id}>
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{ title}</a>
              </Link>
              {subtitle}
            </li> ))
          }
          </ul>
        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview)
//   console.log(allPosts);
//   return {
//     props: { allPosts, preview },
//     revalidate: 1
//   }
// }
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllHomePosts(preview)
  const menu = await getMenu(preview)
  return {
    props: { allPosts,menu, preview },
    revalidate: 1
  }
}
