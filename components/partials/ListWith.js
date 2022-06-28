import IconList from './IconList';
import PostBody from 'components/post-body';

export default function ListWith({ header, content, items }) {
  const sm_column = 2;
  const lg_column = items.length % 2 === 0 ? '2' : items.length % 3 === 0 ? '3' : '3';
  return (
    <div className='relative py-10 border-t border-gray-800 sm:py-12 lg:py-16 '>
      <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <p className='mt-2 h1 text-gradient bg-gradient-to-r from-green-400 to-blue-500 sm:text-4xl'>
          {header}
        </p>
        <p className='text-xl text-gray-400 italic'>
          <PostBody content={content} />
        </p>

        {/* <p class='text-xl text-gray-400 italic'>
          <PostBody content={content} />
        </p> */}

        <div className='mt-24'>
          <div
            className={`grid grid-cols-1 gap-8 sm:grid-cols-${sm_column} lg:grid-cols-${lg_column}`}
          >
            {items.map((feature) => (
              <div key={feature._key} className='pt-6'>
                <div className='flow-root px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <IconList
                        icon={feature?.icon}
                        stil={'inline-flex items-center justify-center rounded-md'}
                        width={70}
                        height={70}
                      />
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-white'>{feature.header}</h3>
                    {feature.subHeader && (
                      <div class='mt-5'>
                        <div class='text-base text-gray-500 text-left'>
                          <PostBody content={feature?.subHeader} />
                        </div>
                      </div>
                      // <p class='text-xl text-gray-400 italic'>
                      //   <PostBody content={feature?.subHeader} />
                      // </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
