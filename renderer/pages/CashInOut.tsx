import React from 'react';

import CashInOutContainer from '../Components/Containers/CashInOut'
import Breadcrumbs from '../Components/Common/BreadCrump/Breadcrumbs';
const CashInOut = () => {
    return (
        <div>
             
          <Breadcrumbs
          items={[
            {
              label: "Titanium",
              path: "/home",
            },
            {
              label: "EndOfDay",
              path: "/EndOfDay",
            },
          ]}
        />
            <CashInOutContainer/>
        </div>
    );
};

export default CashInOut;