import React , { useEffect} from 'react';
import { GetEndOfDay } from '../../../../dataservice/endOfDay';

const index = () => {
       useEffect(() => {
        GetEndOfDay()
        .then(Response => {console.log(Response.data)})
        .catch(err => {console.log(err)})
       } , [])
    return (
        <div className='flex justify-between mt-10 px-4 gap-x-7'>
            <section className='w-1/2 h-[350px] border-maingreen border  '>
                <h2 className='bg-maingreen h-10 border-maingreen border -mt-0.5
                 text-left px-2 flex items-center'>
                    Open transactions
                </h2>
                <div className=' flex flex-col  items-center justify-center h-full'>
                    <div className='grid grid-cols-2 w-[350px] text-left  gap-x-44 justify-items-center'>
                        <h2 className='w-full'>Cash</h2> <h2>0.00</h2>
                        <h2 className='w-full'>Credit Card</h2> <h2>0.00</h2>
                        <h2 className='w-full'>Voucher</h2> <h2>0.00</h2>              
                    </div>  
                    <div className='grid grid-cols-2 border-t   border-white/20 mt-4 pt-2 w-[350px] text-lg 
                        text-left   gap-x-44 justify-items-center'>
                        <h2 className='w-full'>TOTAL</h2>
                         <h2 className='text-maingreen font-semibold'>0.00</h2>
                    </div>
                </div>
            </section>
            <section className='w-1/2 h-[350px] pr-2'>
            <h2 className=' h-10 -mt-0.5 text-left  flex items-center'>
                Open transactions
            </h2>
            <h2 className=' h-10 -mt-0.5 text-left  flex items-center'>
                Admin
            </h2>
            <div className='grid grid-cols-2 w-full text-left text-sm gap-y-1  justify-items-center'>
                        <h2 className='w-full'>Cash</h2> <h2 className='justify-self-end'>0.00</h2>
                        <h2 className='w-full'>Credit Card</h2> <h2 className='justify-self-end'>0.00</h2>
                        <h2 className='w-full'>Voucher</h2> <h2 className='justify-self-end'>0.00</h2>              
                    </div> 
                    <div className='flex items-center w-full justify-between mt-2'>
                        <h2>TOTAL :</h2>
                        <div className='h-[1px] bg-white/20  mt-1  w-[70%] '></div>
                        <h2 className='text-maingreen' >0.00</h2>
                    </div>
            </section>
        </div>
    );
};

export default index;