import React from 'react';
import PromotionNavbarButton from './PromotionNavbarButton';

const index = () => {
    
    const Data = [
        {
           image : '../../icons/Product_navbar/refresh.svg',
           text : 'Refresh'
        },
        {
            image : '../../icons/Product_navbar/plus.svg',
            text : 'Add promotions',
            FunctionHandler : '/newPromotions'
         },
         {
            image : '../../icons/Product_navbar/file_document_edit.svg',
            text : 'Edit'
         },
         {
            image : '../../icons/Product_navbar/delete.svg',
            text : 'Delete',
            FunctionHandler : 'Delete'
         },
         {
            image : '../../icons/Product_navbar/help.svg',
            text : 'Help'
         },
    ]
    return (
        <div className='flex mb-1 mt-1 gap-x-16 py-3 pl-3'>
            {Data.map( (item:any) => (
                <PromotionNavbarButton text={item.text} image={item.image} FunctionHandler={item.FunctionHandler} />
            ))}
        </div>
    );
};
export default index;