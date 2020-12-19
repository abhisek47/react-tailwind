import React from 'react';
import serviceOne from '../assets/s1.png';
import serviceTwo from '../assets/s2.png';
import serviceThree from '../assets/s3.png';
import serviceFour from '../assets/s4.png';
import ServiceItem from './serviceItem';

const serviceItems = [
  {
    id: 1,
    title: 'Private Company Registration',
    des:
      'Company is a popular option to start a business in India by startups and businesses with higher growth aspirations.',
    img: serviceOne,
    link: 'private-limited-company',
  },
  {
    id: 2,
    title: 'GST Registration',
    des:
      'GST Number (GSTIN) is a unique 15 digit number which is allotted to the assessed at the time of filing an application for registration for Goods & Service Tax.',
    img: serviceTwo,
    link: 'private-limited-company',
  },
  {
    id: 3,
    title: 'Income Tax Return',
    des:
      'ITR 1 - This Form is filed by the taxpayers and the individuals being a Resident (other thanNot Ordinarily Resident) having Total Income up to INR 50 lakhs.',
    img: serviceThree,
    link: 'private-limited-company',
  },
  {
    id: 4,
    title: 'Trademark Registration',
    des:
      'A trademark  is a type of intellectual property consisting of recognizable sign, design,or expression which identifies products or services.',
    img: serviceFour,
    link: 'private-limited-company',
  },
  {
    id: 5,
    title: 'ISO Registration',
    des:
      'In order to be certified to the ISO 9001 standard, a company must follow the requirements set forth in the ISO 9001 Standard.',
    img: serviceOne,
    link: 'private-limited-company',
  },
  {
    id: 6,
    title: 'PF Registration',
    des:
      'PF is mandatory if the number of employees exceeds 20 and may be obtained voluntarily if the employee’s number is less than twenty.',
    img: serviceOne,
    link: 'private-limited-company',
  },
];

const Service = () => {
  return (
    <section class='text-gray-700 body-font'>
      <div class='container px-5 py-10 mx-auto'>
        <div class='flex flex-col text-center w-full mb-20'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Master Cleanse Reliac Heirloom
          </h1>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div class='flex flex-wrap -m-4'>
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
