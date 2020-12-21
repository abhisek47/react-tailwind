import React from 'react';
import serviceOne from '../assets/s1.png';
import serviceTwo from '../assets/s2.png';
import serviceThree from '../assets/s3.png';
import serviceFour from '../assets/s4.png';
import serviceFive from '../assets/s5.png';
import serviceSix from '../assets/s6.png';
import ServiceItem from './serviceItem';

const serviceItems = [
  {
    id: 1,
    title: 'Pvt Company Registration',
    des:
      'It is a registered corporate structure, that provides business a separate legal identity from its owners.',
    img: serviceOne,
    link: 'private-limited-company',
  },
  {
    id: 2,
    title: 'GST Registration',
    des:
      'As per the GST law, every person has to register under GST if the total turnover crosses Rs.40 lakh.',
    img: serviceTwo,
    link: 'private-limited-company',
  },
  {
    id: 3,
    title: 'Income Tax Return',
    des:
      'ITR 1 - This Form is filed by the taxpayers and the individuals being a Resident having Total Income up to INR 50 lakhs.',
    img: serviceThree,
    link: 'private-limited-company',
  },
  {
    id: 4,
    title: 'Trademark Registration',
    des:
      'It is a type of intellectual property consisting of recognizable sign  which identifies products or services.',
    img: serviceFour,
    link: 'private-limited-company',
  },
  {
    id: 5,
    title: 'ISO Registration',
    des:
      'A company must follow the requirements set forth in the ISO 9001 Standard.',
    img: serviceFive,
    link: 'private-limited-company',
  },
  {
    id: 6,
    title: 'PF Registration',
    des:
      'PF is mandatory if the number of employees exceeds 20 and  if the employee’s number is less than twenty.',
    img: serviceSix,
    link: 'private-limited-company',
  },
];

const Service = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font my-5'>
            OUR POPULAR SERVICES
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
            We Provided Multi Professional Services
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          {serviceItems.map((item) => (
            <ServiceItem
              key={item.id}
              img={item.img}
              title={item.title}
              des={item.des}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
