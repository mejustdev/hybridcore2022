import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'

import Container from 'components/container'
import PostBody from 'components/post-body'
import MoreStories from 'components/more-stories'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import Comments from 'components/comments'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/layout'
import PostTitle from 'components/post-title'
import Form from 'components/form'
import Comment from 'components/Comment'


import { getAllPostsWithSlug, getPost } from 'lib/api'
import { CMS_NAME } from 'lib/constants'

export default function Post({ post, preview ,previousPost , nextPost}) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                publishDate={post.publishDate}
                updatedDate={post.updatedDate}
                author={post.author}
                estimatedReadingTime={post.estimatedReadingTime}
              />

              <PostBody content={post.excerpt} />
              <PostBody content={post?.body} />
            </article>
            {/* TODO: Post Card */}
            RELATED POSTS
            <ul>
          {post.relatedPosts?.map(({_id,slug,title,subtitle}) => (
            <li key={_id}>
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{ title}</a>
              </Link>
              {subtitle}
            </li> ))
          }
          </ul>


            <SectionSeparator />

            PREVIOUS/NEXT POSTS
            <div>Next post
              <Link as={`/posts/${nextPost?.slug.current}`} href="/posts/[slug]">
                <a className="hover:underline">{ nextPost?.title}</a>
              </Link>
            </div>
            <div>Previous post
              <Link as={`/posts/${previousPost?.slug.current}`} href="/posts/[slug]">
                <a className="hover:underline">{ previousPost?.title}</a>
              </Link>
            </div>
          </>
        )}
      </Container>
      <Comment/>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.currentPost || null,
      excerpt: data?.post || null,
      previousPost: data?.previousPost || null,
      nextPost: data?.nextPost || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
