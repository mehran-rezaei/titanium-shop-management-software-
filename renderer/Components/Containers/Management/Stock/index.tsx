import React, { useState } from 'react';
import StockNavbar from './StockNavbar'

import StockTable from './StockTable'
import StockFilter from './StockFilter'
const Stock = () => {

  return (
    <div className='pl-8 pr-5'>
       <StockNavbar/>
       <div>
         {/* filter section */}
         <StockFilter/>
         <section className='mt-5'>
            <StockTable />
         </section>
       </div>
    </div>
  );
};

export default Stock;