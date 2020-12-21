import React from 'react';

const PriceHead = ({ title, price, ftOne, ftTwo, ftThree }) => {
  return (
    <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
      <div className='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'>
        <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
          {title}
        </h2>
        <h1 className='text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none'>
          &#8377;{price}
        </h1>
        <p className='flex items-center text-gray-600 mb-2'>
          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              className='w-3 h-3'
              viewBox='0 0 24 24'>
              <path d='M20 6L9 17l-5-5'></path>
            </svg>
          </span>
          {ftOne}
        </p>
        <p className='flex items-center text-gray-600 mb-2'>
          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              className='w-3 h-3'
              viewBox='0 0 24 24'>
              <path d='M20 6L9 17l-5-5'></path>
            </svg>
          </span>
          {ftTwo}
        </p>
        <p className='flex items-center text-gray-600 mb-6'>
          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              className='w-3 h-3'
              viewBox='0 0 24 24'>
              <path d='M20 6L9 17l-5-5'></path>
            </svg>
          </span>
          {ftThree}
        </p>
        <button className='flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded'>
          Buy now
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4 ml-auto'
            viewBox='0 0 24 24'>
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
        <p className='text-xs text-gray-500 mt-3'>All inclusive</p>
      </div>
    </div>
  );
};

export default PriceHead;
