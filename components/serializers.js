import React from "react";
import MainImage from "./mainImage";
// import Codepen from "./Codepen";
import ReactPlayer from "react-player";
import SyntaxHighlighter from 'react-syntax-highlighter';
import Codepen from "react-codepen-embed";


const serializers = {
  // codepen: ({ node }) => ( <pre> {JSON.stringify(node,null,2)}</pre>),
  types: {
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    youtube: ({ node }) => <ReactPlayer className="mx-auto" url={node.url} controls />,
    instagram: ({ node }) => {JSON.stringify(node,null,2)},
    codepen: ({ node }) => {
    const splitURL = node.url.split("/");
    // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
    const [, , , user, , hash] = splitURL;
  // const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;

   return  <Codepen
    hash = {hash}
    user= {user}
    loader={() => <div>Loading...</div>}
  />
    },

    twitter: ({node}) => {
      const twitId = node.id;
    return <div>{twitId}</div>},

    code: ({node ={}}) =>{
    const {code,language,highlightedLines} = node
    return <SyntaxHighlighter wrapLines={true} showLineNumbers={true} language={language}
    lineProps={lineNumber => {
      let style = { display: 'block' };
      if (highlightedLines?.includes(lineNumber)) {
        style.backgroundColor = '#dbffdb';
      }
      return { style };
    }}
    >{code}</SyntaxHighlighter>
  }
  }
};

export default serializers;
