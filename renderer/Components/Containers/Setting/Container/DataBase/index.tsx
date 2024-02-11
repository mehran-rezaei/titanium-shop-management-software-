import React from 'react';
import ToggleButton from '../../../Management/Stock/StockFilter/ToggleButton';
import CustomInput from '../../../../Common/CustomInput';

const index = () => {
    return (
        <div className='w-[600px]'>
            <h1 className='text-lg font-medium '>Data base</h1>
            <button className='border border-white/30 w-48 my-3  text-sm font-semibold h-9'>Backup database</button>
            <h2 className='text-maingreen text-sm  mb-3'>Open database location</h2>
            <h1 className='text-lg font-medium '>Auto Backup</h1>

            <section className='grid grid-cols-2 gap-y-4 text-xs py-3 font-medium mb-4 '>
               <div>Enabled auto backup</div>  <ToggleButton />
               <div>Backup database on application start</div>  <ToggleButton />
               <div>Backup database on application close</div>  <ToggleButton />
               <div>Backup location</div> <CustomInput label={undefined} type={undefined} value={undefined} onChange={undefined} />
               <div>Remove old backup files</div>  <ToggleButton />
               <div>Number of days to keep old backup files</div>  <CustomInput label={undefined} type={undefined} value={undefined} onChange={undefined} />
            </section>
            
        </div>
    );
};

export default index;