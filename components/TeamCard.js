import React from 'react';

import HeroImage from '../components/partials/HeroImage';

function TeamCard({ person }) {
  const { _key, itemImage, header, position } = person;
  return (
    <li>
      <div className='space-y-4'>
        <HeroImage mainImage={itemImage} stil={'w-32 h-32 mx-auto rounded-full lg:w-36 lg:h-36'} />
        <div className='space-y-2'>
          <div className='font-medium lg:text-lg'>
            <h3>{header}</h3>
            <p className='text-gray-500'>{position}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TeamCard;
