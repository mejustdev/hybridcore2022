import React from 'react';
import { imageBuilder } from '../../lib/sanity';

const Logo = ({ mainImage, url, stil }) => {
  const imgUrl =
    mainImage &&
    imageBuilder(mainImage)
      // .width(width)
      // .height(height)
      .fit('clip')
      // .auto('format')
      .url();

  return imgUrl ? (
    <a href={url} className='inline-block '>
      <img src={imgUrl} className={stil} alt={mainImage.alt || ''} />{' '}
    </a>
  ) : (
    <></>
  );
};

export default Logo;
