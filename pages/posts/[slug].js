import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';

import Container from 'components/container';
import PostBody from 'components/post-body';
import MoreStories from 'components/more-stories';
import Header from 'components/header';
import PostHeader from 'components/post-header';
import Comments from 'components/comments';
import SectionSeparator from 'components/section-separator';
import Layout from 'components/layout';
import PostTitle from 'components/post-title';
import Form from 'components/form';
import Comment from 'components/Comment';
import Date from 'components/date';
// import { useRouter } from 'next/router';

import { getAllPostsWithSlug, getPost } from 'lib/api';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Blog {slug}</div>;
}

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPost(params.slug, preview);

//   return {
//     props: {
//       preview,
//       post: data?.currentPost || null,
//       excerpt: data?.excerpt || null,
//       previousPost: data?.previousPost || null,
//       nextPost: data?.nextPost || null,
//     },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug();
//   return {
//     paths:
//       allPosts?.map((post) => ({
//         params: {
//           slug: post.slug,
//         },
//       })) || [],
//     fallback: true,
//   };
// }
