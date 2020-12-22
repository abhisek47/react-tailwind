import React from 'react';

const Faq = () => {
  let myRadios = document.getElementsByName('tabs2');
  let setCheck;
  let x = 0;
  for (x = 0; x < myRadios.length; x++) {
    myRadios[x].onclick = function () {
      if (setCheck !== this) {
        setCheck = this;
      } else {
        this.checked = false;
        setCheck = null;
      }
    };
  }
  return (
    <section className='text-gray-700 body-font relative w-full'>
      <h1 className='text-3xl font-medium title-font text-gray-900 m-5 text-center'>
        Frequently Asked Questions
      </h1>
      <div className='container px-5 pb-10 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='w-full mx-auto md:py-8'>
          <div className='shadow-sm'>
            <div className='tab w-full overflow-hidden border-t'>
              <input
                className='absolute opacity-0'
                id='tab-single-one'
                type='radio'
                name='tabs2'
              />
              <label
                className='block p-5 leading-normal cursor-pointer'
                htmlFor='tab-single-one'>
                How to get a company registered ?
              </label>
              <div className='tab-content overflow-hidden border-l-2 bg-white border-indigo-500 leading-normal'>
                <p className='p-5'>
                  Picking the right company structure for your business is as
                  important as any other business-related activity. The right
                  business structure will allow your enterprise to operate
                  efficiently and meet your required business targets. In India,
                  every business must register themselves as part of the
                  mandatory legal compliance. Before we learn how to register a
                  company, let’s try and understand the types of business
                  structures in India.
                </p>
              </div>
            </div>
            <div className='tab w-full overflow-hidden border-t'>
              <input
                className='absolute opacity-0'
                id='tab-single-two'
                type='radio'
                name='tabs2'
              />
              <label
                className='block p-5 leading-normal cursor-pointer'
                htmlFor='tab-single-two'>
                What is trademark registration ?
              </label>
              <div className='tab-content overflow-hidden border-l-2 bg-white border-indigo-500 leading-normal'>
                <p className='p-5'>
                  A trademark is a type of intellectual property consisting of a
                  recognizable sign, design, or expression which identifies
                  products or services of a particular source from those of
                  others, although trademarks used to identify services are
                  usually called service marks.
                </p>
              </div>
            </div>
            <div className='tab w-full overflow-hidden border-t'>
              <input
                className='absolute opacity-0'
                id='tab-single-three'
                type='radio'
                name='tabs2'
              />
              <label
                className='block p-5 leading-normal cursor-pointer'
                htmlFor='tab-single-three'>
                What is import export code registration ?
              </label>
              <div className='tab-content overflow-hidden border-l-2 bg-white border-indigo-500 leading-normal'>
                <p className='p-5'>
                  In this age of cut- throat competition, everyone wants to grow
                  their business beyond the limits of the domestic
                  market.However, doing business globally isn’t just a cup of
                  tea for everyone.Before going global, you need to follow
                  several procedures and laws in place and get different
                  registration and license.IEC(Import Export Code) license is
                  one of such prerequisite when you’re thinking of importing or
                  exporting from India.
                </p>
              </div>
            </div>
            <div className='tab w-full overflow-hidden border-t'>
              <input
                className='absolute opacity-0'
                id='tab-single-four'
                type='radio'
                name='tabs2'
              />
              <label
                className='block p-5 leading-normal cursor-pointer'
                htmlFor='tab-single-four'>
                What is GST9 ?
              </label>
              <div className='tab-content overflow-hidden border-l-2 bg-white border-indigo-500 leading-normal'>
                <p className='p-5'>
                  The Government of India has made it mandatory to file GST9 if
                  turnover of previous year exceeds 2 crores and 9C is mandated
                  if turnover of assessee exceeds 5 crores.
                </p>
              </div>
            </div>
            <div className='tab w-full overflow-hidden border-t'>
              <input
                className='absolute opacity-0'
                id='tab-single-five'
                type='radio'
                name='tabs2'
              />
              <label
                className='block p-5 leading-normal cursor-pointer'
                htmlFor='tab-single-five'>
                What Exactly is ISO Certified ? And Why Does it Matter ?
              </label>
              <div className='tab-content overflow-hidden border-l-2 bg-white border-indigo-500 leading-normal'>
                <p className='p-5'>
                  ISO certification certifies that a management system,
                  manufacturing process, service, or documentation procedure has
                  all the requirements for standardization and quality
                  assurance. ISO (International Organization for
                  Standardization) is an independent, non-governmental,
                  international organization that develops standards to ensure
                  the quality, safety, and efficiency of products, services, and
                  systems.
                </p>
              </div>
            </div>
            <div className='tab w-full overflow-hidden border-t'>
              <input
                className='absolute opacity-0'
                id='tab-single-six'
                type='radio'
                name='tabs2'
              />
              <label
                className='block p-5 leading-normal cursor-pointer'
                htmlFor='tab-single-six'>
                What is ESI registration ?
              </label>
              <div className='tab-content overflow-hidden border-l-2 bg-white border-indigo-500 leading-normal'>
                <p className='p-5'>
                  ESI stands for Employee State Insurance managed by the
                  Employee State Insurance Corporation which is an autonomous
                  body created by the law under the Ministry of Labour and
                  Employment, Government of India. This scheme is started for
                  Indian workers.The workers are provided with a huge variety of
                  medical, monetary and other benefits from the employer.Any
                  Company having more than 10 employees(in some states it is 20
                  employees) who have a maximum salary of Rs. 15000/- has to
                  mandatorily register itself with the ESIC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
