import Link from 'next/link';
import React from 'react';

const HomeButton = (props:any) => {
    const { adress , title} = props
    return (
        <Link href={adress}>
        <div className='border hover:bg-maingreen cursor-pointer transition-all 
        ease-in duration-100 text-base leading-9 text-center border-maingreen
         h-10 w-[300px] rounded-md'>
            {title}
        </div>
        </Link>
    );
};

export default HomeButton;