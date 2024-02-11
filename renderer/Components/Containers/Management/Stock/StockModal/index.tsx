import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FiDelete } from 'react-icons/fi';
import useStockInputStore from '../../../../../store/stocStore';
import { PostQuickInventoryCount } from '../../../../../dataservice/management/stock';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -60%)',
  width: 400,
  height : 550,
  bgcolor: '#515254',
  border: '2px solid #515254',
//   boxShadow: 24,
  p: 4,
};
const index = () => {
  const selectedRow = useStockInputStore((state) =>  state.selectedRow)
  const setSelectedRow = useStockInputStore((state) =>  state.setSelectedRow)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value ,setValue] = useState<any>('')
    const setInputvalue = (event:any) => {
      console.log(event);
      let x= event
      let y;
      y=value.concat(x)
      setValue(y)
    }
    const removeLastNumber = () => {
      if(value){
      setValue(value.substring(0, value.length -1))}
    }
    const sendData =() => {
      if(value > 0){
        PostQuickInventoryCount(selectedRow.barcodeId,value)
        .then(Response => {
          console.log(Response);
         if (Response.data == true){
          setSelectedRow('')
          handleClose()
         }
        })
        .catch( err => {console.log(err)  })
      }
    }
    return (
        <div>
                <button onClick={handleOpen}
                disabled={selectedRow.length < 1 && true} type='button'
                 className='cursor-pointer flex  gap-y-2  flex-col 
                 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50'>
            <img src="../../../../icons/Stock_Navbar/FastEdit.svg" 
            className='h-7 w-7'
              alt="" />
            <h2  >Quick inventory</h2>
            </button>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
      <div className='text-white text-center'>
            <h2 className='text-xl mb-3'>Update Stock Quantity</h2>
            <h2 className='text-lg'>set Stock Quantity for selected product.</h2>
            <h2 className="text-lg">Inventory count ducument will be created automatically.</h2>
            <input type="text" value={value} className='w-[310px] mt-8 bg-white/0 border py-1 border-white text-right px-3' />
            <div className='grid grid-cols-4 gap-y-4 mt-6 text-xl justify-items-center'>
                <h4 onClick={() => setInputvalue(1)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>1</h4>
                <h4 onClick={() => setInputvalue(2)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>2</h4>
                <h4 onClick={() => setInputvalue(3)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>3</h4>
                <h4 onClick={removeLastNumber}   className='cursor-pointer border border-white h-14 flex items-center justify-center w-16'>
                <FiDelete style={{scale : "1.3", color : "white"}} />
                  </h4>
                <h4 onClick={() => setInputvalue(4)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>4</h4>
                <h4 onClick={() => setInputvalue(5)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>5</h4>
                <h4 onClick={() => setInputvalue(6)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>6</h4>
                <h4 onClick={() => handleClose()} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>esc</h4>
                <h4 onClick={() => setInputvalue(7)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>7</h4>
                <h4 onClick={() => setInputvalue(8)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>8</h4>
                <h4 onClick={() => setInputvalue(9)} className='cursor-pointer border border-white h-14 leading-[52px] w-16'>9</h4>
                <h4 onClick={() => sendData()} className='cursor-pointer row-span-2 border border-white   leading-[122px] w-16'>{'enter'}</h4>
                <h4 onClick={() => setInputvalue(0)} className='cursor-pointer col-span-2 g-blue-300 border border-white  leading-[52px] w-[147px]'>0</h4>
                <h4 onClick={() => setInputvalue('.')} className='cursor-pointer border border-white h-14 leading-[45px] w-16'>.</h4>
            </div>
      </div>
  </Box>
</Modal>
        </div>
    );
};

export default index;