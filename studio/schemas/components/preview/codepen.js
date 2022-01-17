import React from "react";

const CodePenPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return (<div>Add a CodePen URL</div>)
  }
  const splitURL = url.split("/");
  // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;
  return (
    <iframe
      height="370"
      style={{ width: '100%' }}
      scrolling="no"
      title="CodePen Embed"
      src={embedUrl}
      frameBorder="no"
      allowTransparency
      allowFullScreen
      />
      );
    };

    export default CodePenPreview;