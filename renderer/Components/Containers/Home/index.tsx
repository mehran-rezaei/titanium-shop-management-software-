import React from 'react';
import HomeButton from './HomeButton';

const index = () => {
    return (
        <div className='mx-auto w-[80%]'>
            <section className='flex flex-col mt-20 gap-y-4 items-center justify-center'>
                <img src="../../logo/titlogo.svg" alt="" />
                <h2 className='text-xl font-semibold text-maingreen'>Titanium</h2>
                <div className='flex items-center justify-center w-full'>
                   <div className='w-[400px] mx-6 border-t border-dashed h-[1px] -pt-2 border-white/70'></div>
                  <span className='text-lg font-semibold'>Select your page</span>
                   <div className='w-[400px] mx-6 border-t border-dashed h-[1px] -pt-2 border-white/70'></div>
                </div>
            </section>
            <section className='mt-10 grid grid-cols-2 items-center  gap-y-8 w-full justify-items-center'>
                    <HomeButton title={'Home'} adress='/home' />
                    <HomeButton title={'Sale'} adress='/sale' />
                    <HomeButton title={'Management'} adress='/Management' />
                    <HomeButton title={'Cash in/out'} adress='/CashInOut' />
                    <HomeButton title={'View sales history'} adress='/salehistory' />
                    <HomeButton title={'End of day'} adress='/EndOfDay' />                  
                    <HomeButton title={'Refund'} adress='/refund' />                  
                    <HomeButton title={'Setting'} adress='/Setting' />                  


            </section>
        </div>
    );
};

export default index;