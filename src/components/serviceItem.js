import React from 'react';

const ServiceItem = ({ img, title, des, link }) => {
  return (
    <div className='lg:w-1/3 sm:w-1/2 p-4'>
      <div className='flex relative'>
        <img
          alt='gallery'
          className='absolute inset-0 w-full h-64 object-cover object-center'
          src={img}
        />
        <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 h-64'>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            {title}
          </h1>
          <p className='leading-relaxed'>{des}</p>
          <a
            className='mt-3 text-indigo-500 inline-flex items-center'
            href={`/${link}`}>
            Apply now
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'>
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
