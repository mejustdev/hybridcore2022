import React, { useState } from 'react';
import { imageBuilder } from '../../lib/sanity';

const HeroImage = ({ mainImage, type, url, stil, width = 1200, height, onClick }) => {
  const imgUrl = mainImage && imageBuilder(mainImage).width(width).height(height).url();

  return imgUrl ? (
    <img src={imgUrl} className={stil} alt={mainImage.alt || ''} onClick={onClick} />
  ) : (
    <></>
  );
};

export default HeroImage;
