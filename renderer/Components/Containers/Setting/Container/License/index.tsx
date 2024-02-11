import React from 'react';

const index = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col'>
            <div className='border-b border-white/25 pb-4'>
                <button className='border w-48 mx-2 text-sm font-semibold h-10'>Sign in</button>
                <button className='border w-48 mx-2 text-sm font-semibold h-10'>Load lincense from file</button>
            </div>
            <div className='mt-4'>
                <h2 className='text-maingreen text-sm'>Visit  www.titanium.com to learn more about premium features</h2>
                <h2 className='text-gray-400 font-medium text-center mt-3 text-[13px]'>Activation key</h2>
                <h2 className='text-gray-400 font-medium  text-center     text-[13px]'>DS8V54654464565ASD5656565FF666SSSFLGUU</h2>
            </div>
        </div>
    );
};

export default index;