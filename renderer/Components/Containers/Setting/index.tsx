import React from 'react';
import Sidbar from './Sidbar'
import useSettingStore from '../../../store/settingStore';
import SettingFooter from './SettingFooter'
import BasicSetting from './Container/BasicSetting'
import Orderpayment from './Container/Order_payment'
import Productsetting from './Container/Product_setting'
import WeighingScale from './Container/WeghingScale'
import CustomerDisplay from './Container/CustomerDisplay'
import AboutContainer from './Container/About'
import LicenseContainer from './Container/License'
import DatabaseContainer from './Container/DataBase'
import EmailsettingContainer from './Container/EmailSetting'
import PrintOptionsContainer from './Container/PrintOptions'

const index = () => {
  const selectedButton = useSettingStore((state) => state.selectedButton);
  return (
    <main className=''>
      <div className='w-full grid grid-cols-12 border-b border-white/50 h-[85vh]'>
        <section className='col-span-2'>
          <Sidbar />
        </section>
        <section className='col-span-10 py-3 border-l border-white/50 px-3'>
          {selectedButton === 'basic' && <BasicSetting />}
          {selectedButton === 'order' && <Orderpayment />}
          {selectedButton === 'product' && <Productsetting />}
          {selectedButton === 'weighing' && <WeighingScale />}
          {selectedButton === 'customer' && <CustomerDisplay />}
          {selectedButton === 'about' && <AboutContainer />}
          {selectedButton === 'license' && <LicenseContainer />}
          {selectedButton === 'database' && <DatabaseContainer />}
          {selectedButton === 'email' && <EmailsettingContainer />}
          {selectedButton === 'print' && <PrintOptionsContainer />}
        </section>
      </div>
      <SettingFooter />
    </main>
  );
};

export default index;