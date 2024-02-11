import React from 'react';
import { ticIcons, exiticons } from '../../../CashInOut/CashIcons'
import { CreatePromotions } from '../../../../../dataservice/Promotions/NewPromotionsProvider';
import useNewPromotionsStore from '../../../../../store/newPromotions';

const index = () => {
    const promotionData = useNewPromotionsStore((state) => state.promotionData)
    const selectedProduct = useNewPromotionsStore((state) => state.selectedProduct)
    
    const DataHandler = () => {
        console.log(promotionData);
        console.log(promotionData.promotionItems);
      let daysweek =   promotionData.daysOfWeek.join("-")    
      console.log(daysweek);
      
        
         CreatePromotions(promotionData,selectedProduct,daysweek)
         .then(Response => {
            console.log(Response);
         })
         .catch(err => console.log(err))
    } 
    return (
        <section className='absolute right-4 bottom-4 flex'>
        <button 
        onClick={DataHandler}
        className='flex items-center gap-x-1 justify-center w-36 h-10 border border-maingreen bg-maingreen 
            mr-4'>
          <img src={ticIcons} alt="" />
          Save
        </button>
        <button className='flex items-center gap-x-1 justify-center w-36 h-10 border '>
          <img src={exiticons} alt="" />
          Cancel
        </button>
      </section>
    );
};

export default index;