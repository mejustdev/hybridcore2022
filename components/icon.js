import React from 'react';
import { imageBuilder } from '../lib/sanity';
// Use width height or className to control the image size
const Icon = ({ icon, width = 200 }) => {
  const imgUrl =
    icon &&
    imageBuilder(icon)
      // .width(width)
      // .height(Math.floor((9 / 16) * width))
      .fit('crop')
      .auto('format')
      .url();

  return imgUrl ? (
    <img className='w-12 h-12 rounded-full mr-4' src={imgUrl} alt={icon.alt || ''} />
  ) : (
    <></>
  );
};

export default Icon;
