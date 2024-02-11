import React, { useState } from 'react';
import Table from '../../../Common/Table';
import { columns, sample_data } from "./HistoryTableData";
import DatePciker from './DatePciker';
import { DateObject } from 'react-multi-date-picker';

const index = () => {
    const [values, setValues] = useState<any>([
        new DateObject().subtract(4, "days"),
        new DateObject().add(4, "days")
      ])
    const [id, setId] = useState<any>(1000)
    const changeId = () => {
        setId(1001)
      }
    return (
        <div className='mx-4'>
            <section className='flex  items-center  rounded-l-md overflow-hidden
             border-maingreen   my-2 h-12'>
                <div className='w-12 p-2 h-12 bg-maingreen  '>
                    <img src='../../icons/EndOfday/report.svg' alt="" />
                </div>
                <div className='border px-4 flex items-center text-sm rounded-r-md
                 border-maingreen h-12' 
                >Use the list below to select and print a copy of any previously generated Z report.</div>
            </section>
            <section className='flex items-center mt-8'>
                {/* <input type="date" className='bg-white/0 border-b w-56 border-maingreen' /> */}
                <DatePciker values={values} setValues={setValues}/>
                <div className='flex flex-col items-center ml-10'>
                    <img src="../../icons/Product_navbar/print.svg" alt="" />
                    <h2>Print selected report</h2>
                </div>
            </section>
            <section className='mt-5 mb-4 w-full flex justify-between items-center'>
                <span className='text-lg'>Reports</span>
                <span className='w-[94%]  mt-2 h-[1px] border-t border-white/50'></span>
            </section>
            <section>
                <Table SelectedItemId={1000} columns={columns} data={sample_data} onClick={setId}
                />
            </section>
        </div>
    );
};

export default index;