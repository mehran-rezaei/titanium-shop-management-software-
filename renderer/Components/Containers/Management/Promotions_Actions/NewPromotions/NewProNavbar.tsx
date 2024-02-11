import React, { useEffect, useState } from 'react';
import CustomInput from '../../../../Common/CustomInput';
import ToggleButton from '../../../../Common/Toggle';

import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import useNewPromotionsStore from '../../../../../store/newPromotions';

const NewProNavbar = () => {
    const promotionData = useNewPromotionsStore((state) => state.promotionData)
    const setPromotionData = useNewPromotionsStore((state) => state.setPromotionData)
    const selectedProduct = useNewPromotionsStore((state) => state.selectedProduct)

    console.log(promotionData);
    const [DateData , setDateData] = useState<any>({ 
        startDateData : '',
        endDateData : '',
        startTime : '',
        endTime : ''
    })
    console.log(DateData);
    // console.log(startDate.day);
    // console.log(startDate.month.number);
    // console.log(startDate.year);
if(DateData.startDateData !== ''){
    console.log(
    `${DateData.startDateData.year}/${DateData.startDateData.month.number}/${DateData.startDateData.day}`
    );
    // `${DateData.startDate.year}/${DateData.startDate.month.number}/${DateData.startDate.day}`,
}
if(DateData.endDateData !== ''){
    console.log(
    `${DateData.endDateData.year}/${DateData.endDateData.month.number}/${DateData.endDateData.day}`
    );
    // `${DateData.startDate.year}/${DateData.startDate.month.number}/${DateData.startDate.day}`,
}
if(DateData.startTime !== ''){
    console.log(
    `${DateData.startTime.hour}:${DateData.startTime.minute}:${DateData.startTime.second}`
    );
    // `${DateData.startDate.year}/${DateData.startDate.month.number}/${DateData.startDate.day}`,
}
if(DateData.endTime !== ''){
    console.log(
    `${DateData.endTime.hour}:${DateData.endTime.minute}:${DateData.endTime.second}`
    );
    // `${DateData.startDate.year}/${DateData.startDate.month.number}/${DateData.startDate.day}`,
}
  
useEffect(() => {
    if(DateData.startDateData !== '' && DateData.startTime !== ''){
        setPromotionData({
            ...promotionData , 
            startDate  : `${DateData.startDateData.year}-${DateData.startDateData.month.number}-${DateData.startDateData.day} ${DateData.startTime.hour}:${DateData.startTime.minute}:${DateData.startTime.second}`
        })}
} , [DateData])
  useEffect(() => {
if(DateData.endDateData !== '' && DateData.endTime !== ''){
    setPromotionData({
        ...promotionData , 
        endDate  : `${DateData.endDateData.year}-${DateData.endDateData.month.number}-${DateData.endDateData.day} ${DateData.endTime.hour}:${DateData.endTime.minute}:${DateData.endTime.second}`
    })}
  } , [ DateData ])
  
    const [data , setData] = useState<any>({
        name: '',
        startDate: "2023-09-26T07:10:16.038Z",
        endDate: "2023-09-26T07:10:16.038Z",
        isHappyHour: true,
        daysOfWeek: "dd",
        daysOfWesek: "dd",
        isEnabled: true,
    })
    console.log(data.isEnabled);
    const handleDaysOfWeekChange = (e:any) => {
        setPromotionData({
          ...promotionData,
          daysOfWeek:[...promotionData.daysOfWeek,  e.target.value] // Append selected days to the existing string
        });
      };
    return (
        
        <div className='px-3'>
            <section className='flex py-3 items-center justify-start gap-x-4 w-[600px]'>
                <div className=' '>
                    <input
                        onChange={(e) => setPromotionData({ ...promotionData, name: e.target.value })}
                        placeholder='Promotion name'
                        className='bg-white/0 px-2 w-[300px] h-8 rounded-md border-x-white/70 focus:border-maingreen outline-none border ' />
                </div>
                <div className='flex items-center'>
                    <ToggleButton value={promotionData.isEnabled}
                        onChange={() => {
                            setData({ ...data, isEnabled: false })
                            setPromotionData({ ...promotionData, isEnabled: !promotionData.isEnabled })
                        }}
                        label={''} />
                    {/* <ToggleButton /> */}
                    <span className='text-sm font-semibold'>Active</span>
                </div>
            </section>
            <section className='flex items-center gap-x-16 mb-4 mt-2'>
                <div className='flex gap-x-2 items-center'>
                    <span className='mr-2 text-sm font-semibold'>Start</span>
                    <DatePicker
                         value={''}
                         onChange={(dateObject: any) => {
                            setDateData({...DateData, startDateData : dateObject});
                         }}
                        className='bg-dark'
                        placeholder='start date'
                        style={{
                            background: "none",
                            height: "28px",
                            width: "190px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            padding: "3px 10px"
                        }}
                        format="MM/DD/YYYY"
                    />
                    <DatePicker
                           onChange={(dateObject: any) => {
                            setDateData({...DateData, startTime : dateObject});
                         }}
                        placeholder='start time'
                        className='bg-dark'
                        style={{
                            background: "none",
                            height: "28px",
                            width: "190px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            padding: "3px 10px"
                        }}
                        disableDayPicker
                        format="HH:mm:ss"
                        plugins={[
                            <TimePicker />
                        ]}
                    />
                </div>
                <div className='flex gap-x-2 items-center'>
                    <span className=' mr-2 text-sm font-semibold'>End</span>
                    <DatePicker
                    value={''}
                            onChange={(dateObject: any) => {
                                setDateData({...DateData, endDateData : dateObject});
                             }}
                        className='bg-dark'
                        placeholder='end date '
                        style={{
                            background: "none",
                            height: "28px",
                            width: "190px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            padding: "3px 10px"
                        }}
                        //   format="MM/DD/YYYY HH:mm:ss"
                        format="MM/DD/YYYY"

                    //   plugins={[
                    //     <TimePicker color='black' position="bottom" />
                    //   ]} 
                    />
                    <DatePicker
                           onChange={(dateObject: any) => {
                            setDateData({...DateData, endTime : dateObject});
                         }}
                        placeholder='end time'
                        className='bg-dark'
                        style={{
                            background: "none",
                            height: "28px",
                            width: "190px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            padding: "3px 10px"
                        }}
                        disableDayPicker
                        format="HH:mm:ss"
                        plugins={[
                            <TimePicker />
                        ]}
                    />
                </div>
            </section>
            <section className='flex items-center gap-x-4'>
                <div className='flex gap-x-1'>
                    <input
                    onChange={handleDaysOfWeekChange}
                    value={'All'} type="checkbox" />
                    <span className='text-xs'>All days</span>
                </div>
                <div className='flex gap-x-1'>
                    <input  
                    onChange={handleDaysOfWeekChange}
                    value={'Monday'}
                     type="checkbox" />
                    <span className='text-xs'>Monday</span>
                </div>
                <div className='flex gap-x-1'>
                    <input
                    onChange={handleDaysOfWeekChange}
                     type="checkbox" value={'tuesday'} /> 
                    <span className='text-xs'>tuesday</span>
                </div>
                <div className='flex gap-x-1'>
                    <input
                    onChange={handleDaysOfWeekChange}
                
                     type="checkbox" value={'WednesDay'} />
                    <span className='text-xs'>WednesDay</span>
                </div>
                <div className='flex gap-x-1'>
                    <input 
                    onChange={handleDaysOfWeekChange}
                     type="checkbox" value={'thursday'}  />
                    <span className='text-xs'>thursday</span>
                </div>
                <div className='flex gap-x-1'>
                    <input  
                    onChange={handleDaysOfWeekChange}
                     type="checkbox" value={'Friday'} />
                    <span className='text-xs'>Friday</span>
                </div>
                <div className='flex gap-x-1'>
                <input  
                    onChange={handleDaysOfWeekChange}
                    type="checkbox" value={'Saturday'} />
                    <span className='text-xs'>Saturday</span>
                </div> 

            <div className='flex gap-x-1'>
                <input
                    onChange={handleDaysOfWeekChange}
                    type="checkbox" value={'Sunday'} />
                    <span className='text-xs'>Sunday</span>
                </div>

            </section>
        </div>
    );
};

export default NewProNavbar;