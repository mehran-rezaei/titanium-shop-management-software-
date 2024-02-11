import React from 'react';
import NewProNavbar from './NewProNavbar';
import ProductChoose from './ProductChoose';
import SelectedProduct from './SelectedProduct';
import PromotionsFooter from '../PromotionsFooter'



const index = () => {
   
    return (
       <div>
            <NewProNavbar />
            <section className='grid w-full grid-cols-12 px-3 gap-x-7 mt-4'>
                <div className='col-span-3'> <ProductChoose/> </div>
                <div className='border border-maingreen rounded-sm col-span-9'>
                     <SelectedProduct />
                </div>
            </section>
      <PromotionsFooter />

       </div>
    );
};

export default index;