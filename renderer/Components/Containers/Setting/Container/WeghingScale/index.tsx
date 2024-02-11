import React, { lazy, useState } from 'react';
import SelectCantainer from '../../../../Common/SelectForSetting'
import ToggleButton from '../../../../Common/Toggle';

const index = () => {
  const Languages  = [ { id: 1 , name :'English'},{ id: 2, name : 'Persian'}, { id: 3, name : 'Arabic'} ]
  const [selectedLanguages , setSelectedLanguages] = useState<any>(1)

  const directions  = [ { id: 1 , name :'Left to right'}, { id: 2, name : 'Right to left'} ]
  const [selectedDircetions , setSelectedDircetions] = useState<any>(1)

  const colors  = [ 
  { id: 1 , name :'Dark'}, { id: 2, name : 'Light'} ,
   { id : 3 , name : 'Dimmed'} , { id : 4 , name : 'Gray'} ]
  const [selectColor , setSelectedColor] = useState<any>(1)

  const Layouts  = [ { id: 1 , name :'Visual'}, { id: 2, name : 'Satandard'} ]
  const [selectedLayout , setSelectedLayout] = useState<any>(1)

  const Zoom  = [ { id: 1 , name :'100%'} , { id: 2, name : '90%'} ,
   { id: 3, name : '80%'}, { id: 4, name : '70%'}, { id: 5, name : '60%'},
    { id: 6, name : '120%'} , { id: 7, name : '150%'} ]
  const [selectedZoom , setSelectedZoom] = useState<any>(1)

  return (
    <div className='overflow-scroll h-[81vh]'>
      <div className='w-[700px]'>

      <h1 className='text-xl mb-4'>Weighing scale barcode</h1>
        <section className='grid grid-cols-2 gap-y-4 text-xs font-medium mb-4 '>
          <ToggleButton label={undefined} value={undefined} onChange={undefined} />
          <div>Enable weighing scale barcode</div> 
        </section>
    </div>
    </div>

  );
};

export default index;