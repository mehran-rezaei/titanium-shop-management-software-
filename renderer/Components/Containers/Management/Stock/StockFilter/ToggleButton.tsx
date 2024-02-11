import React from 'react';

const ToggleButton = (props: any) => {
    const { text,  OnChange , value } = props
    return (
        <div className='flex items-center'>
            <input
                className="mr-2 mt-[0.2rem] h-3.5 w-9 appearance-none rounded-[0.4375rem] bg-[#9E9E9E]
      before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full 
      after:absolute after:z-[2] after:-mt-[0.1875rem]  after:h-5 after:w-5 after:rounded-full after:border-none 
       after:bg-[#515254] checked:bg-[#00A5A5] checked:after:absolute checked:after:z-[2] 
       checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5
        checked:after:w-5 checked:after:rounded-full checked:after:border-none  checked:after:bg-[#00A5A5] 
         checked:after:transition-[background-color_0.2s,transform_0.2s]"
                type="checkbox"
                onChange={OnChange}
                checked={value}
                role="switch"
                id="flexSwitchCheckDefault" />
            <label
         
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="flexSwitchCheckDefault">
                    {text}
                    
            </label>
        </div>
    );
};

export default ToggleButton;