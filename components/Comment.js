

import React, { useRef } from "react";

import useComment from "../lib/hooks/use-comment";

const Comments = () => {
  const comment = useRef(null);

  const status = useComment({
    url: "https://utteranc.es/client.js",
    theme: "github-dark",
    issueTerm: "url",
    repo: "mejustdev/sanity-io-next-js-blog",
    ref: comment
  });

  return (
    <div className="w-full">
      {
        <div ref={comment}></div>
      }
    </div>
  );
};

export default Comments;
