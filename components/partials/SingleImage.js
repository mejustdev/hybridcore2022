import HeroImage from '../partials/HeroImage';

function SingleImage({ mainImage, caption } = {}) {
  return (
    <section className='relative pt-16'>
      <div className='relative px-4 mx-auto max-w-8xl sm:px-6 space-y-16'>
        <div className='relative pb-12 md:pb-20'>
          <HeroImage mainImage={mainImage} width={900} height={600} stil={'mx-auto rounded'} />
        </div>
      </div>
    </section>
  );
}

export default SingleImage;
