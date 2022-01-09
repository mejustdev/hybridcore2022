import React from "react";
import MainImage from "./mainImage";
import ReactPlayer from "react-player";
import SyntaxHighlighter from 'react-syntax-highlighter';




const serializers = {
  types: {
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    youtube: ({ node }) => <ReactPlayer className="mx-auto" url={node.url} controls />,
    instagram: ({ node }) => {JSON.stringify(node,null,2)},

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
