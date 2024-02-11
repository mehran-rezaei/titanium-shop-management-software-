import React from 'react';
import EndDayButton from './EndDayButton'
const index = () => {
    const imageList = [
         '../../icons/EndOfday/user.svg',
         '../../icons/EndOfday/users.svg',
         '../../icons/EndOfday/closeregister.svg',
         '../../icons/EndOfday/report.svg'
    ]
    return (
        <div className='mt-6 ml-4'>
            <h2>Select Cash out options</h2>
            <section className=' mt-4 flex justify-between mr-4  items-center'>
            <div className='flex gap-x-4 '>
            <EndDayButton text={'Cash out'} EndDaytypeprops={1} img={imageList[0]} />
            <EndDayButton text={'Cash out all users'} EndDaytypeprops={2} img={imageList[1]} />
            <EndDayButton text={'Close register'} EndDaytypeprops={3} img={imageList[2]} />
            </div>
            <EndDayButton text={'REPORT'} EndDaytypeprops={4} img={imageList[3]} />
            </section>
        </div>
    );
};

export default index;