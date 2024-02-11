import React from 'react';
import useEndDayStore from '../../../../store/endOfDayStore';

const index = () => {
  const EndDaypageType = useEndDayStore((state) =>  state.EndDaypageType)
  const setEndDayPageType = useEndDayStore((state) =>  state.setEndDayPageType)
    return (
        <div>
            <div className='border-b border-maingreen'>
                <button 
                onClick={() => setEndDayPageType(1)}
                className={`w-fit mr-3 text-sm px-3 py-2  rounded-t-sm 
               ${EndDaypageType === 1 && 'bg-maingreen'} `}>
                    End of Day
                </button>
                <button 
                onClick={() => setEndDayPageType(2)}
                className={`w-fit mr-3 text-sm px-3 py-2  rounded-t-sm 
               ${EndDaypageType === 2 && 'bg-maingreen'} `}>
                    History
                </button>
            </div>
        </div>
    );
};

export default index;