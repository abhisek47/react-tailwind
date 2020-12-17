import React from 'react';
import MenuItem from './menuItem';

const Header = () => {
  return (
    <div className='bg-gray-200 font-sans leading-normal tracking-normal w-full'>
      <nav className='bg-white border-b-2 border-gray-100 text-gray-900'>
        <div className='container mx-auto flex flex-row justify-between aligns-center'>
          <div className='block p-5 text-xl text-teal-600 font-bold'>
            <a href='/#' className='hover:text-teal-900'>
              ClientFilingIndia
            </a>
          </div>
          <div>
            <ul className='flex'>
              <li className='hoverable hover:bg-teal-700 hover:text-black'>
                <span className='relative block py-6 px-6 lg:p-6 text-sm lg:text-base font-bold hover:bg-teal-700 hover:text-black'>
                  Services
                </span>
                <div className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-700'>
                  <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3'>
                      <div className='flex items-center'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Company Registration
                        </h3>
                      </div>
                      <MenuItem title='Private Limited Company' />
                      <MenuItem title='Public Limited Company' />
                      <MenuItem title='Limited Liability Partnership' />
                      <MenuItem title='Appointment of Directors' />
                      <MenuItem title='Removal of Directors' />
                      <div className='flex items-center mt-4'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Other Registration
                        </h3>
                      </div>
                      <MenuItem title='Tax Deducted at Source' />
                      <MenuItem title='Tax Collected at Source' />
                      <MenuItem title='Book Keeping' />
                    </ul>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3'>
                      <div className='flex items-center'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Intellectual Property
                        </h3>
                      </div>
                      <MenuItem title='Trademark Registration' />
                      <MenuItem title='Trademark Return Filing' />
                      <MenuItem title='Copyright Registration' />
                      <div className='flex items-center mt-4'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Goods and Services Tax
                        </h3>
                      </div>
                      <MenuItem title='GST Registration' />
                      <MenuItem title='GST Return Filing' />
                    </ul>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3'>
                      <div className='flex items-center'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Income Tax Filing
                        </h3>
                      </div>
                      <MenuItem title='Income Tax Return 1' />
                      <MenuItem title='Income Tax Return 2' />
                      <MenuItem title='Income Tax Return 3' />
                      <MenuItem title='Income Tax Return 4' />
                      <MenuItem title='Income Tax Return 5' />
                      <MenuItem title='Income Tax Return 6' />
                      <MenuItem title='Income Tax Return 7' />
                    </ul>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3'>
                      <div className='flex items-center'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Annual Compliances
                        </h3>
                      </div>
                      <MenuItem title='Private Limited Company' />
                      <MenuItem title='Limited Liability Partnership' />
                      <MenuItem title='Partnership Firm, Society, Trust, NGO' />
                      <MenuItem title='Import Exort Code Registration' />
                      <MenuItem title='ISO Registration' />
                      <div className='flex items-center mt-4'>
                        <h3 className='font-bold text-xl text-black text-bold mb-2'>
                          Payroll Compliances
                        </h3>
                      </div>
                      <MenuItem title='Provident Fund Registration' />
                      <MenuItem title='Provident Fund Return Filing' />
                      <MenuItem title='Employee State Insurances Registration' />
                      <MenuItem title='Employee State Insurances Return Filing' />
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0 p-4'>
            <a
              href='/#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              Sign in
            </a>
            <a
              href='/#'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
