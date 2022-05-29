// schemas/previews/instagramPost.js

import React from "react";
import InstagramEmbed from "react-instagram-embed";

const InstagramPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }

  return (
    <InstagramEmbed
    // TODO: Add Client Access Token
      clientAccessToken='123|456'
      url={url}
      maxWidth={480}
      containerTagName="div"
      injectScript
    />
  );
};

export default InstagramPreview;