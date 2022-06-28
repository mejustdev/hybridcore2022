import React from 'react';
import { imageBuilder } from '../lib/sanity';

const MainImage = ({ mainImage, url, width = 1200, stil }) => {
  const imgUrl =
    mainImage &&
    imageBuilder(mainImage)
      .width(width)
      .height(Math.floor((9 / 16) * width))
      .fit('crop')
      .auto('format')
      .url();

  return imgUrl ? (
    <a href={url} target='blank'>
      <img src={imgUrl} alt={mainImage.alt || ''} class={stil} />{' '}
    </a>
  ) : (
    <></>
  );
};

export default MainImage;
