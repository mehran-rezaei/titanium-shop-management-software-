import React from 'react';
import { ticIcons, exiticons } from '../../CashInOut/CashIcons'

const index = () => {
    return (
        <section className='absolute right-4 bottom-4 flex'>
        <button className='flex items-center gap-x-1 justify-center w-36 h-10 border border-maingreen bg-maingreen 
            mr-4'>
          <img src={ticIcons} alt="" />
          Continue
        </button>
        <button className='flex items-center gap-x-1 justify-center w-36 h-10 border '>
          <img src={exiticons} alt="" />
          Cancel
        </button>
      </section>
    );
};

export default index;