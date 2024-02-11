import React from 'react';
import EndofDayNavbar from './EndDayNavbar'
import EndDayButtonSections from './EndDayButtonSections'
import EndDayMain from './EndDayMain'
import EndDayFooter from './EndDayFooter'
import useEndDayStore from '../../../store/endOfDayStore';
import EndDayHistory from './EndDayHistory'
const index = () => {
  const EndDaypageType = useEndDayStore((state) =>  state.EndDaypageType)

    return (
        <>
            {EndDaypageType === 1 &&
        <div className='pt-6 pl-0'>
            <EndofDayNavbar />
            <EndDayButtonSections />
            <EndDayMain />
            <EndDayFooter /> 
        </div>}
          { EndDaypageType ===  2 &&
          <div className='pt-6 pl-0'>
            <EndofDayNavbar />
            <EndDayHistory/>
          </div>
          }
        </>

    );
};

export default index;