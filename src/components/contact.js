import React from 'react';

const Contact = () => {
  return (
    <section className='text-gray-700 body-font relative w-full'>
      <h1 className='text-3xl font-medium title-font text-gray-900 mt-5 text-center'>
        Contact Us
      </h1>
      <div className='container px-5 py-10 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-5 flex items-end justify-start relative w-full'>
          <iframe
            width='100%'
            height='100%'
            className='absolute inset-0'
            frameBorder='0'
            title='map'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1469126988773!2d88.38807295050945!3d22.573607985109554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276651ba4e60f%3A0xddc61660d567e3ed!2sP%2F36%2C%20Kadapara%2C%20Phool%20Bagan%2C%20Kankurgachi%2C%20Kolkata%2C%20West%20Bengal%20700054!5e0!3m2!1sen!2sin!4v1608634329064!5m2!1sen!2sin'></iframe>
          <div className='bg-black relative flex flex-wrap py-6 bg-opacity-80'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-medium text-gray-100  tracking-widest text-sm'>
                ADDRESS
              </h2>
              <p className='leading-relaxed text-gray-100'>
                P/36, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal
                700054
              </p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-medium text-gray-100 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a href='/#' className='text-indigo-500 leading-relaxed '>
                info@cilentfilingindia.com
              </a>
              <h2 className='title-font font-medium text-gray-100 tracking-widest text-sm mt-4'>
                PHONE
              </h2>
              <p className='leading-relaxed text-gray-100'>+91-9832949193</p>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-6'>
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
            Feedback
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-600'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-600'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
          </div>
          <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Submit
          </button>
          <p className='text-xs text-gray-500 mt-3'>
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
