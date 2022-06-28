import { getTeams } from 'lib/api';
import TeamCard from 'components/TeamCard';

export default function Team({ teamBuilder, advisoryBuilder, headerTitle, advisorsTitle }) {
  return (
    <>
      <section className='relative'>
        {/* Background image */}
        {/* @TODO: Add bg image */}
        {/* <div className='absolute inset-0'>
          <Img
            className='object-cover w-full h-full'
            src={require('../images/logo-4.webp')}
            width='1440'
            height='394'
            alt='About'
          />
          <div className='absolute inset-0 bg-gray-900 opacity-25' aria-hidden='true'></div>
        </div> */}

        {/* Hero content */}
        <div className='relative max-w-6xl px-4 mx-auto sm:px-6'>
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='mb-4 h1 text-gradient bg-gradient-to-r from-green-400 to-blue-500'>
                {headerTitle}
              </h1>
            </div>
          </div>
        </div>
        {/* <Wave /> */}
      </section>
      <section>
        <div className='border-gray-800 '>
          <div className='px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
            <div className='space-y-8 sm:space-y-12'>
              <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'></div>
              <ul className='grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-2 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3'>
                {teamBuilder.map((person) => {
                  return <TeamCard key={person._key} person={person} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Advisors */}
        <div className='border-t border-gray-800'>
          <div className='px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
            <div className='space-y-8 sm:space-y-12'>
              <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
                <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl text-gradient bg-gradient-to-r from-green-400 to-blue-500'>
                  {advisorsTitle}
                </h2>
              </div>
              <ul className='grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-2 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3'>
                {advisoryBuilder.map((person) => {
                  return <TeamCard key={person._key} person={person} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const teams = await getTeams(preview);
  const { teamBuilder, advisoryBuilder, headerTitle, advisorsTitle } = teams;
  return {
    props: {
      teamBuilder,
      advisoryBuilder,
      headerTitle,
      advisorsTitle,
      preview,
    },
    revalidate: 1,
  };
}
