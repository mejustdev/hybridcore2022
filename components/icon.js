import React from 'react';
import { imageBuilder } from '../lib/sanity';
// Use width height or className to control the image size
const Icon = ({ icon, width = 200, height = 200 }) => {
  const imgUrl =
    icon &&
    imageBuilder(icon)
      // .width(width)
      // .height(Math.floor((9 / 16) * width))
      .fit('crop')
      .auto('format')
      .url();

  return imgUrl ? (
    <section className='relative pt-16'>
      <div className='relative px-4 mx-auto max-w-8xl sm:px-6 space-y-16'>
        <img
          className='mx-auto rounded'
          src={imgUrl}
          alt={icon.alt || ''}
          width={width}
          height={height}
        />

        <div className='relative pb-12 md:pb-20'>
          <h3 className='max-w-4xl mx-auto text-lg font-medium text-center '>
            {icon.caption ?? ''}
          </h3>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Icon;
