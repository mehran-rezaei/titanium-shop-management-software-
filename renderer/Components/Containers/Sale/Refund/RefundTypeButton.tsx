import React , {useState} from 'react';

const RefundTypeButton = (props:any) => {


    const { text , type , id , setId  } = props
    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </svg>
    return (
     <div onClick={() => setId(type)} className={`h-20 w-40 flex items-center cursor-pointer
      justify-center border relative ${type == id && 'bg-maingreen'}`}>
      
           <span className={`block absolute bg-maingreen p-1 border rounded-[50%] 
           -top-6  ${type != id && 'opacity-0'}`}
           >{icon}</span> 
           <span className=''>{text}</span>  
     </div>
    );
};

export default RefundTypeButton;