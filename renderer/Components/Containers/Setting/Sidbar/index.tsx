import React from 'react';
import SideBarButton from './SideBarButton';
const index = () => {
  return (
    <div>
      <div className='text-left text-sm flex items-start flex-col '>
        <SideBarButton type={'basic'} text={'Basic Setting'} />
        <SideBarButton type={'order'} text={'Order & payment'} />
        <SideBarButton type={'product'} text={'Product Setting'} />
        <SideBarButton type={'weighing'} text={'Weighing scale'} />
        <SideBarButton type={'customer'} text={'Customer display'} />
        <SideBarButton type={'email'} text={'Email setting'} />
        <SideBarButton type={'print'} text={'Print options'} />
        <SideBarButton type={'database'} text={'Database'} />
        <SideBarButton type={'license'} text={'License'} />
        <SideBarButton type={'about'} text={'About'} />
      </div>
    </div>
  );
};

export default index;