import React from 'react';
import Breadcrumbs from '../Components/Common/BreadCrump/Breadcrumbs';
import SettingContainer from '../Components/Containers/Setting'
const Setting = () => {
  return (
    <div>
           <Breadcrumbs
          items={[
            {
              label: "Titanium",
              path: "/home",
            },
            {
              label: "Setting",
              path: "/Setting",
            },
          ]}
        />
        <SettingContainer />
    </div>
  );
};

export default Setting;