import React from 'react';
import ReactPlayer from 'react-player';

const Statistic = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-10 mx-auto flex flex-wrap justify-between'>
        <div className='flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
          <div className='w-full  px-4 mb-6 hidden lg:block'>
            <h1 className='title-font font-medium text-xl mb-2 text-gray-900'>
              PAN India Services
            </h1>
            <div className='leading-relaxed'>
              We help and assist clients in legal compliances and keep the
              burden of compliances with us for ease of focusing on business.
            </div>
          </div>
          <div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 className='title-font font-medium text-3xl text-gray-900'>
              2013
            </h2>
            <p className='leading-relaxed'>Company Established</p>
          </div>
          <div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 className='title-font font-medium text-3xl text-gray-900'>
              4.5K
            </h2>
            <p className='leading-relaxed'>Happy Clientele</p>
          </div>
          <div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 className='title-font font-medium text-3xl text-gray-900'>
              35
            </h2>
            <p className='leading-relaxed'>Staff Members</p>
          </div>
          <div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 className='title-font font-medium text-3xl text-gray-900'>4</h2>
            <p className='leading-relaxed'>Offices Available</p>
          </div>
        </div>
        <div className='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
          <div className='video'>
            <ReactPlayer
              width='100%'
              url='https://vimeo.com/489742495'></ReactPlayer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
