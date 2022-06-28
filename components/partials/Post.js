import React from 'react';

import ArticlePost from './ArticlePost';
import VideoPost from './VideoPost';

const Post = ({ allPosts }) => {
  const data = allPosts.map((post) => {
    console.log('POOST', post);
    const { posttype } = post;
    return posttype === 'text' ? <ArticlePost post={post} /> : <VideoPost post={post} />;
  });
  return data;
};

export default Post;
