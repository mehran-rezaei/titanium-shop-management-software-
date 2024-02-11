import React from 'react';
import useEndDayStore from '../../../../store/endOfDayStore';

const EndDayButton = (props:any) => {
    const { EndDaytypeprops  , text , img} = props
    const EndDaytype = useEndDayStore((state) =>  state.EndDaytype)
    const setEndDaytype = useEndDayStore((state) =>  state.setEndDaytype)


    return (
        <div 
        onClick={() => setEndDaytype(EndDaytypeprops)}
        className={`border-maingreen  cursor-pointer gap-y-3 h-36 w-36 border flex items-center justify-center flex-col
          ${EndDaytype === EndDaytypeprops && 'bg-maingreen'}`}>
            <img src={img} alt="" />
            <h2 className='text-xs font-semibold' >{text}</h2>
        </div>
    );
};

export default EndDayButton;