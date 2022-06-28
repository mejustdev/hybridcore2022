import React from 'react';
import { getCovid19 } from 'lib/api';
function Covid19({ data }) {
  console.log('DATA COVID', data);
  const { embed } = data;
  return (
    <div className='embed-responsive aspect-ratio-square bg-white mt-20 '>
      <iframe title={embed.title} src={embed.url} className='embed-responsive-item'></iframe>
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const data = await getCovid19(preview);

  return {
    props: { data, preview },
  };
}

export default Covid19;
