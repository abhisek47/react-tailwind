import React from 'react';
import SideMenuItems from './sideMenuItems';

const SideMenu = () => {
  return (
    <div className='px-2 pt-2 pb-3 space-y-1' role='none'>
      <SideMenuItems title='Private Limited Company' />
      <SideMenuItems title='Public Limited Company' />
      <SideMenuItems title='Limited Liability Partnership' />
      <SideMenuItems title='Appointment of Directors' />
      <SideMenuItems title='Removal of Directors' />
      <hr />
      <SideMenuItems title='Trademark Registration' />
      <SideMenuItems title='Trademark Renewal' />
      <hr />
      <SideMenuItems title='Goods and Services Tax Registration' />
      <SideMenuItems title='Goods and Services Tax Return' />
      <hr />
      <SideMenuItems title='Income Tax Return - 1' />
      <SideMenuItems title='Income Tax Return - 2' />
      <SideMenuItems title='Income Tax Return - 3' />
      <SideMenuItems title='Income Tax Return - 4' />
      <SideMenuItems title='Income Tax Return - 5' />
      <SideMenuItems title='Income Tax Return - 6' />
      <SideMenuItems title='Income Tax Return - 7' />
      <hr />
      <SideMenuItems title='Annual Compliances for Private Limited Company' />
      <SideMenuItems title='Annual Compliances for Limited Liability Partnership' />
      <SideMenuItems title='Annual Compliances for Partnership Fund, Trust, NGO, Society' />
      <SideMenuItems title='Import Export Code Registration' />
      <SideMenuItems title='ISO Registration' />
      <hr />
      <SideMenuItems title='Provident Fund Registration' />
      <SideMenuItems title='Provident Fund Return Filing' />
      <SideMenuItems title='ESI Registration' />
      <SideMenuItems title='ESI Return Filing' />
      <hr />
      <SideMenuItems title='Tax Collected at Source Filing' />
      <SideMenuItems title='Tax Deducted at Source Filing' />
      <SideMenuItems title='Book Keeping' />
    </div>
  );
};

export default SideMenu;
