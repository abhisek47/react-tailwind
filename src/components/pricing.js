import React from 'react';
import PriceHead from './priceHead';

const Pricing = () => {
  return (
    <section className='text-gray-700 body-font overflow-hidden'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font my-5'>
            OUR BEST PLANS
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
            Choose Your Plan
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <PriceHead
            title='PRIVATE COMPANY'
            price='11,800'
            ftOne='Class 2 digital signature certificate - 3 pcs'
            ftTwo='Director identification numbers - 3 number'
            ftThree='RUN name approval'
          />
          <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden'>
              <span className='bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl'>
                POPULAR
              </span>
              <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                INCOME TAX RETURN
              </h2>
              <h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                <span>&#8377;2,030</span>
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
                Income tax return filing for an individual with salary income of
                less than Rs.5 lakhs.
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
                CA assisted ITR filing for all your income tax needs
              </p>
              <button className='flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded'>
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
          <PriceHead
            title='GST REGISTRATION'
            price='1,180'
            ftOne='Secure GST identification number'
            ftTwo='CA assisted GST filing for all your GST needs'
            ftThree='Completely online – no need to visit office'
          />
          <PriceHead
            title='PROVIDENT FUND'
            price='8,000'
            ftOne='Filing of application for provident fund registration'
            ftTwo='Up to 20 employee'
            ftThree='Alone with employee state insurance'
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
