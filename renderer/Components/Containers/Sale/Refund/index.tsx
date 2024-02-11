import React , { useState} from 'react';
import RefundTypeButton from './RefundTypeButton';
import RefundFooter from './RefundFooter';

const index = () => {
    const [type,setType] = useState<any>(1) 
    const [id , setId] = useState<any>(1) 
    const imgicons = 
    <svg viewBox="0 0 24 24" height={82} width={82} xmlns="http://www.w3.org/2000/svg"
     fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M5.671 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0A9.993 9.993 0 0 1 2.25 9.767l.077-.313 1.934.51a8 8 0 1 0 3.053-4.45l-.221.166 1.017 1.017-4.596 1.06 1.06-4.596 1.096 1.096zM13 6v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z"></path> </g> </g></svg>
  
    return (
        <div className='grid grid-cols-12 h-[94vh]'>
        <section className='col-span-3   '>l</section>
        <section className='col-span-9 flex items-center justify-center flex-col 
         border-l border-white h-full'>
                 <div>{imgicons}</div>
                <h2 className='text-xl mt-3'>Enter receipt number amd payment type to confirm refund</h2>
                <div className='flex items-center justify-center flex-col mt-5  gap-y-3'>
                    <h3 className='border-t border-white w-28 h-[1px]'></h3>
                    <span>Recpeit Number</span>
                    <input type="text" className='bg-white/0 border border-gray-500 
                    h-12 w-72 focus:border-maingreen px-2' />
                </div>
                <div className='mt-6'>
                    <h3 className='text-lg text-center w-full mb-10'>
                        Refund Payment type</h3>
                    <div className='flex justify-center gap-x-5 mb-20'>
                    <RefundTypeButton id={id} setId={setId} type={1} setType={setType} text={'CREDIT CARD'} />
                    <RefundTypeButton id={id} setId={setId} type={2} setType={setType} text={'CASH'} />
                    <RefundTypeButton id={id} setId={setId} type={3} setType={setType} text={'DEBIT CARD'} />
                    <RefundTypeButton id={id} setId={setId} type={4} setType={setType} text={'CHECK'} />
                    <RefundTypeButton id={id} setId={setId} type={5} setType={setType} text={'VOUCHER'} />
                    <RefundTypeButton id={id} setId={setId} type={6} setType={setType} text={'GIFT CARD'} />
                    </div>
                </div>
        </section>
        <RefundFooter />
        </div>
    );
};

export default index;