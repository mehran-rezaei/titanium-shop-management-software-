import React from 'react';
import "./RoleSelect.css"
import Link from 'next/link';
const SelectPage = () => {
  // const navigate = useNavigate();

  return (
    <div className='RolePage'>
         <h1>Titanium</h1>
         <div className='roleselector'>
          <div></div>
         <h2>Select Page</h2>
          <div></div>
         </div>
         <div className='RoleItem'>
         <Link href={'/sale'}> <div>Sale</div> </Link>
         <Link href={'/layout/Documents'} > <div>Management</div> </Link>
         <Link href={'/endOfDay'}> <div> End Of Day </div></Link>
         <Link href={'/CashInOut'}> <div>Cash In Out </div> </Link>
         <Link href={'/'}><div>Setting</div></Link>
         <Link href={'/SaleHistory'}> <div>View Sales History</div></Link>
         </div>
    </div>
  );
};

export default SelectPage;
