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

      <h1 className='text-xl mb-4'>Application style</h1>
        <section className='grid grid-cols-2 gap-y-4 text-xs font-medium mb-4 '>
          <div>Language</div> 
          <SelectCantainer listData={Languages} onChange={(item:any) =>setSelectedLanguages(item.target.value)}
          showProp={'name'} value={selectedLanguages}/>

          <div>Writing dirction</div> 
          <SelectCantainer listData={directions} onChange={(item:any) =>setSelectedDircetions(item.target.value)}
          showProp={'name'} value={selectedDircetions}/>


          <div>Color scheme</div>
          <SelectCantainer listData={colors} onChange={(item:any) =>selectColor(item.target.value)}
          showProp={'name'} value={selectColor}/>
 
 
          <div>Layout</div>
          <SelectCantainer listData={Layouts} onChange={(item:any) =>setSelectedLayout(item.target.value)}
          showProp={'name'} value={selectedLayout}/>

          <div>Number or rows / columns</div> 
          <div>select</div>


          <div>Enable virtual keyboard </div> 
          <div>
            <ToggleButton label={undefined} value={undefined} onChange={undefined} />
          </div>


          <div>Zoom</div> 
          <SelectCantainer listData={Zoom} onChange={(item:any) =>setSelectedZoom(item.target.value)}
          showProp={'name'} value={selectedZoom}/>


        </section>
        <h1 className='text-xl mb-4'>Messages</h1>
        <section className='grid grid-cols-2 gap-y-4 text-xs font-medium mb-4'>
          <div>Show "Close" button</div> <div><ToggleButton label={undefined} value={undefined} onChange={undefined} /></div>
          <div>Click to close</div> <div><ToggleButton label={undefined} value={undefined} onChange={undefined} /></div>
          <div>Slide in</div> <div><ToggleButton label={undefined} value={undefined} onChange={undefined} /></div>
          <div>Message duration (sec.)</div> <div><ToggleButton label={undefined} value={undefined} onChange={undefined} /></div>


          <div>Postion</div> 
          <SelectCantainer listData={Zoom} onChange={(item:any) =>setSelectedZoom(item.target.value)}
          showProp={'name'} value={selectedZoom}/>

        </section>
        <h1 className='text-xl mb-4'>Business day</h1>
        <section className='grid grid-cols-2 gap-y-4  mb-4 text-xs font-medium '>
          <div>Show cash in on application start</div> <div><ToggleButton label={undefined} value={undefined} onChange={undefined} /></div>
          <div>Select business day on application start</div> <div><ToggleButton label={undefined} value={undefined} onChange={undefined} /></div>
        </section>
        <h1 className='text-xl mb-4'>Button bar</h1>
        <section className='grid grid-cols-2 gap-y-2  mb-4 text-xs font-medium '>
          <div className='col-span-2 mb-3'>select actions to appear in button bar</div>
          <div className='flex justify-start  col-span-2 gap-x-3 items-center text-sm'>
          <div className='inline'><input type="checkbox" /> <span>Search</span></div> 
          <div className='inline'><input type="checkbox" /> <span>Transfer</span></div>
          <div className='inline'><input type="checkbox" /> <span>Discount</span></div> 
          <div className='inline'><input type="checkbox" /> <span>Coment</span></div>
          </div>
          <div></div>
          <div className='flex justify-start col-span-2 gap-x-3  items-center text-sm'>
          <div className='inline'><input type="checkbox" /> <span>new Sale</span></div> 
          <div className='inline'><input type="checkbox" /> <span>Refund</span></div>
          <div className='inline'><input type="checkbox" /> <span>Order Name</span></div> 
          <div className='inline'><input type="checkbox" /> <span>Cash drawer</span></div>
          </div>
        </section>
    </div>
    </div>

  );
};

export default index;