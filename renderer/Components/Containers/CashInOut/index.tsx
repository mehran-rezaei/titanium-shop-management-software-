import React, { useState } from 'react';
import { downIcons, upIcons, downSmall, upSmall, ticIcons, exiticons } from './CashIcons'
const index = () => {
  const [type, setType] = useState<any>('add')
  return (
    <div className='pl-2 pt-4'>

      <section className='flex gap-x-2'>
        <div onClick={() => setType('add')} className={` cursor-pointer flex flex-col items-center justify-center w-32 h-28  border-maingreen border
              ${type === 'add' ? 'bg-maingreen' : ''}`}>
          <img src={upIcons} alt="" />
          Add cash
        </div>
        <div onClick={() => setType('remove')} className={` cursor-pointer flex flex-col w-32 h-28  items-center justify-center  border-maingreen border
              ${type === 'remove' ? 'bg-maingreen' : ''}`}>
          <img src={downIcons} alt="" />
          Remove cash
        </div>
      </section>
      <section className='pr-3 my-4'>
        <h3 className='text-sm mb-2'>Amount</h3>
        <input type="text" className='bg-white/0 mb-4 py-1 px-3 w-[220px] focus:border-borderGreen border' />
        <h3 className='text-sm mb-2'>Description</h3>
        <textarea className='bg-white/0 py-1 h-16 px-3 w-full focus:border-borderGreen border' />
      </section>
      <section className='flex flex-col gap-y-3'>
        <div className='flex items-center justify-between pr-3 '>
          <span className='mb-1 text-base'>Cash entries (3)</span>
          <div className='h-[1px] w-[91%]  bg-white'></div>
        </div>
        <div className='text-sm  flex items-center g gap-x-2'>
          <div>
            <img src={downSmall} alt="" />
          </div>
          <div className=''>
            <h3 className='font-semibold'>55/000 / {'<No discription>'}</h3>
            <h3 className='font-normal text-xs mt-1'>Admin @ 9/13/2023 11:59:58 AM</h3>
          </div>
        </div>
        <div className='text-sm flex items-center gap-x-2 '>
          <div>
            <img src={upSmall} alt="" />
          </div>
          <div>
            <h3 className='font-semibold'>55/000 / {'<No discription>'}</h3>
            <h3 className='font-normal text-xs mt-1'>Admin @ 9/13/2023 11:59:58 AM</h3>
          </div>
        </div>
        <div className='text-sm flex items-center g gap-x-2'>
          <div>
            <img src={downSmall} alt="" />
          </div>
          <div>
            <h3 className='font-semibold'>55/000 / {'<No discription>'}</h3>
            <h3 className='font-normal text-xs mt-1'>Admin @ 9/13/2023 11:59:58 AM</h3>
          </div>
        </div>

      </section>
      <section className='absolute right-4 bottom-4 flex'>
        <button className='flex items-center gap-x-1 justify-center w-36 h-10 border border-maingreen bg-maingreen 
            mr-4'>
          <img src={ticIcons} alt="" />
          Save
        </button>
        <button className='flex items-center gap-x-1 justify-center w-36 h-10 border '>
          <img src={exiticons} alt="" />
          Cancel
        </button>
      </section>
    </div>
  );
};

export default index;