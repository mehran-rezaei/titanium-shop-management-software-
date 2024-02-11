import React from 'react';
import Sale from '../Components/Containers/Sale';
import Breadcrumbs from '../Components/Common/BreadCrump/Breadcrumbs';

const sale = () => {
    return (
        <div>
       <Breadcrumbs
          items={[
            {
              label: "Titanium",
              path: "/home",
            },
            {
              label: "Sale",
              path: "/sale",
            },
          ]}
        />
            <Sale />
        </div>
    );
};

export default sale;