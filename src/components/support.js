import React from 'react';

const Support = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-5 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font my-5'>
            OUR BUSINESS SUPPORT
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
            Drive Your Business Forward
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 md:w-1/3'>
            <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col  hover:shadow-inner'>
              <div className='flex items-center mb-3'>
                <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg title-font font-medium'>
                  VIBRANT TEAM
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='leading-relaxed text-base'>
                  A talented workforce that works in collaboration with a
                  network of over 6000+ Professionals.
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 md:w-1/3'>
            <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-inner'>
              <div className='flex items-center mb-3'>
                <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg title-font font-medium'>
                  CUSTOMER SUPPORT
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='leading-relaxed text-base'>
                  Our team is available from 10 am - 6 pm, except sunday and
                  government holidays.
                </p>
              </div>
            </div>
          </div>
          <div className='p-4 md:w-1/3'>
            <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-inner'>
              <div className='flex items-center mb-3'>
                <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg title-font font-medium'>
                  SECURE PAYMENT
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='leading-relaxed text-base'>
                  Easily pay online with EMI payments, credit or debit card, net
                  banking, PayPal and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
