import React from 'react';
import useSettingStore from '../../../../store/settingStore';

const SideBarButton = (props:any) => {
  const selectedButton = useSettingStore((state) => state.selectedButton);
  const setSelectedItem = useSettingStore((state) => state.setSelectedItem);


    const {text , type } = props
    return (
        <h2
        onClick={() => setSelectedItem(type)}
        className={`h-11 px-3 font-semibold w-full cursor-pointer 
         flex items-center justify-start 
         ${selectedButton === type ? 'bg-maingreen' : 'hover:bg-gray-700/50'}
         `}>
            {text}
            </h2>
        
    );
};

export default SideBarButton;