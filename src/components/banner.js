import gsap from 'gsap';
import { TweenMax, Power3 } from 'gsap';
import React, { useRef, useEffect } from 'react';
import banner from '../assets/bnn.png';

const Banner = () => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let caption = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2, line3], 0.8, {
      delay: 0.5,
      ease: 'Power3.out',
      y: 64,
      stagger: {
        amount: 0.25,
      },
    });
    TweenMax.to(caption, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, [line1, line2, line3, caption]);
  return (
    <section className='text-white body-font banner z-0'>
      <div className='container mx-auto flex px-5 py-10 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center font-medium'>
          <h1 className='title-font text-4xl xl:text-6xl mb-4 font-bold z-0'>
            <div className='line-wrap'>
              <div ref={(el) => (line1 = el)} className='z-0'>
                We are helping
              </div>
            </div>
            <div className='line-wrap'>
              <div ref={(el) => (line2 = el)}>startup to grow</div>
            </div>
            <div className='line-wrap'>
              <div ref={(el) => (line3 = el)}>your business</div>
            </div>
          </h1>
          <p
            className='my-6 leading-relaxed text-lg z-0'
            ref={(el) => (caption = el)}>
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
        <div className='lg:max-w-lg lg:w-max md:w-1/2 w-5/6'>
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
