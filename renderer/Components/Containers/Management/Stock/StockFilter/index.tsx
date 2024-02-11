import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import { barcode ,alpha , search } from '../StockIcons';
import useStockInputStore from '../../../../../store/stocStore';

const index = () => {
    const quantityTypes = useStockInputStore((state) =>  state.quantityTypes)
    const setQuantityTypes = useStockInputStore((state) =>  state.setQuantityTypes)
    const searchType = useStockInputStore((state) =>  state.searchType)
    const setSearchType = useStockInputStore((state) =>  state.setSearchType)
    const allPruductNumber = useStockInputStore((state) =>  state.allPruductNumber)
    console.log(searchType);
    console.log(quantityTypes);  
    const [type , setType] = useState<string>('alpha')
    const value = useStockInputStore((state) =>  state.value)
    const setValue = useStockInputStore((state) =>  state.setValue)
   const ChangeHandler = (event:any) => {
    console.log(event.target.value);
    setValue(event.target.value);
     }
    return (
        <div>
         <section className={`flex items-center gap-x-9  
         ${value.length > 0 && 'hidden'} `}>
         <ToggleButton 
            OnChange={() => setQuantityTypes({ neqQuantity : !quantityTypes.neqQuantity})} 
            value={quantityTypes.neqQuantity} text={'Negative quantity'} />
         <ToggleButton 
             OnChange={() => setQuantityTypes({ nonzeroQuantity : !quantityTypes.nonzeroQuantity})} 
             value={quantityTypes.nonzeroQuantity} text={'Non zero quantity'} />
         <ToggleButton 
             OnChange={() => setQuantityTypes({ zeroQuantity :  !quantityTypes.zeroQuantity})} 
             value={quantityTypes.zeroQuantity} text={'Zero quantity'} />
         </section>
         <section className='flex justify-between mt-7'>
          {/* inputs */}
          <div className='w-96 flex items-center justify-between pr-0 overflow-hidden  
            rounded-[15px] h-11 text-base border border-borderGreen'>
          <div className='flex  h-full'>
            <div onClick={() => {
                setSearchType('barcode')
                setType('barcode')}}
            className={`border-r w-11 border-borderGreen h-full flex items-center
             justify-center cursor-pointer  ${type === 'barcode' && 'bg-borderGreen'} `}>
              <img className='w-7 h-7 ' src={barcode.url} alt="" />
            </div>
            <div onClick={() => {
                setSearchType('productCode')
                setType('number')}}
             className={`border-r w-11 border-borderGreen h-full flex cursor-pointer 
            items-center justify-center  ${type === 'number' && 'bg-borderGreen'} `}>
              123
            </div>
            <div onClick={() => {
                setSearchType('name')
                setType('alpha')}}
            className={`w-11 h-full flex items-center justify-center mr-2 cursor-pointer
             ${type === 'alpha' && 'bg-borderGreen'} `}>
            <img className='w-6 h-7 mr-1' src={alpha.url} alt="" />
            </div>
            <div className='flex items-center'>
              <input placeholder={`Product ${searchType === 'name' ? 'name' : 
              searchType === 'productCode' ? 'Code' : 'barcode' }`}
               type='text' 
              className='bg-white/0 border-none w-44' 
              onChange={() => ChangeHandler(event)}/>
            </div>
            </div>
            <div className='w-11 h-full flex items-center justify-center '>
            <img className='w-0 h-0 mr-1' src={search.url} alt="" />
            </div>
           </div>
           <div className='w-60 flex items-center justify-center
            rounded-[15px] h-11 text-base border border-borderGreen'>
           Products count :  <span className='ml-2'>{allPruductNumber && allPruductNumber}</span>
           </div>
         </section> 
         {/* <h2>value data : {value}</h2>    */}
        </div>
    );
};

export default index;