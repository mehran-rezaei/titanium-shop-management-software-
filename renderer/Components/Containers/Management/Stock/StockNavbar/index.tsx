import React from 'react';
import StockModal from '../StockModal'


const index = () => {
    return (
        <div className='flex items-center justify-between w-[80%] py-8 '>
            <div className='flex  gap-y-2  flex-col items-center justify-center'>
            <img src="../../../../icons/Product_navbar/refresh.svg" className='h-7 w-7'  alt="" />
            <h3>Refresh</h3>
            </div>
            <div className='flex   gap-y-2 flex-col items-center justify-center'>
            <img src="../../../../icons/Product_navbar/refresh.svg" className='h-7 w-7'  alt="" />
            <h3>Stock history</h3>
            </div>
            <div className='flex  gap-y-2  flex-col items-center justify-center'>
            <img  src={"../../../../icons/Product_navbar/print.svg"} className='h-7 w-7'  alt="" />
            <h3>Print product</h3>
            </div>
            <div className='flex   gap-y-2 flex-col items-center justify-center'>
            <img src="../../../../icons/Stock_Navbar/SavePdf.svg" className='h-7 w-7'  alt="" />
            <h3>Save as PDF</h3>
            </div>
            <div className='flex   gap-y-2 flex-col items-center justify-center'>
            <img src="../../../../icons/Product_navbar/refresh.svg" className='h-7 w-7'  alt="" />
            <h3>Inventory count report</h3>
            </div>
            {/* <div className='flex  gap-y-2  flex-col items-center justify-center'>
            <img src="../../../../icons/Stock_Navbar/FastEdit.svg" className='h-7 w-7'  alt="" />
            <h3>Quick inventory</h3>
            </div> */}
               <StockModal /> 
            <div className='flex  gap-y-2  flex-col items-center justify-center'>
            <img src="../../../../icons/Product_navbar/help.svg" className='h-7 w-7'  alt="" />
            <h3>Help</h3>
            </div> 
        </div>
    );
};

export default index;