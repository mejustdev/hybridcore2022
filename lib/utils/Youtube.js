import React from 'react';

export default function Youtube() {
  return (
    <iframe
      className='absolute w-full h-full'
      width='560'
      height='315'
      src='https://www.youtube.com/embed/R66DY3PAsEE'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
}
