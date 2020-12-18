import React from 'react';

const SideMenuItems = ({ title }) => {
  return (
    <a
      href='/'
      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
      role='menuitem'>
      {title}
    </a>
  );
};

export default SideMenuItems;
