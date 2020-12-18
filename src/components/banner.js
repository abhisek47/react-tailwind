import React from 'react';
import banner from '../assets/boost.png';

const Banner = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container mx-auto flex px-5 py-5 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center font-medium'>
          <h1 className='title-font text-4xl xl:text-6xl mb-4 font-bold text-gray-900'>
            We are helping startup to grow your business
          </h1>
          <p className='mb-8 leading-relaxed'>
            We have over 8+ years of corporate and consulting experience with
            top firms. Our network includes experienced chartered accountants,
            company secretaries, lawyers, cost accountants and many more.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-medium'>
              Get started
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-medium'>
              Call us
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src={banner}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
