import React from 'react';
import Breadcrumbs from '../Components/Common/BreadCrump/Breadcrumbs';
import RefundCaontainer from '../Components/Containers/Sale/Refund'
const refund = () => {
    return (
        <div>
        <Breadcrumbs
          items={[
            {
              label: "Titanium",
              path: "/home",
            },
            {
              label: "Refund Items",
              path: "/refund",
            },
          ]}
        />
        <div>
          <RefundCaontainer />
        </div>
        </div>
    );
};

export default refund;