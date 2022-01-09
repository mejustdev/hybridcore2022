import React from 'react'
import getYouTubeID from'get-youtube-id'
// const YouTubePreview = ({value}) => <pre>{JSON.stringify(value, null, 2)}</pre>;


const YouTubePreview = ({value}) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if(!id){
    return <div>Missing Youtube Url</div>;
  }
  return (
    <iframe
    width="560"
    height="315"
    src={url}
    title="YouTube Preview"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
};

export default YouTubePreview;