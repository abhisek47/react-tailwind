import React from 'react';

const MenuItem = ({ title, link }) => {
  return (
    <React.Fragment>
      <a
        href={`/${link}`}
        className='block  py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
        role='menuitem'>
        {title}
      </a>
    </React.Fragment>
  );
};

export default MenuItem;
