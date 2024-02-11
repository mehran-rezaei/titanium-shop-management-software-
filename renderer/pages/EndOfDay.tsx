import React from 'react';
import EndOfDayContainer from '../Components/Containers/EndOfDay'
import Breadcrumbs from '../Components/Common/BreadCrump/Breadcrumbs';


const EndOfDay = () => {
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
            <EndOfDayContainer />
            
        </div>
    );
};

export default EndOfDay;