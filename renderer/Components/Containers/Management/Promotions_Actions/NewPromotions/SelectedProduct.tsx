import React, { useEffect, useState } from 'react';
import useNewPromotionsStore from '../../../../../store/newPromotions';
import { alpha } from '../../Stock/StockIcons';
import CustomInput from '../../../../Common/CustomNumberInput';
import { NumericFormat } from 'react-number-format';
import Select from '../../../../Common/SelectForSetting'
import { deleteIcons ,helpImages } from '../PromotionsImage'
import ToggleButton from '../../../../Common/Toggle';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';

const SelectedProduct = () => {
    const updateProductById = useNewPromotionsStore((state) => state.updateProductById)
    const selectedProduct = useNewPromotionsStore((state) => state.selectedProduct)
    const deleteProductById = useNewPromotionsStore((state) => state.deleteProductById)
    const [value , setValue] = useState<any>(0)
    const [discountType, setDiscountType] = useState<any>(1)
    const [conditionType , setConditionType] = useState<any>(0)
    console.log(selectedProduct);
    console.log(discountType);
    
    const selectData = [{ id: 1, name: 'Discount' }, { id: 2, name: 'Fixed price' }]

    const [selectedValue, setSelectedValue] = useState<any>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> , id) => {
        // setSelectedValue(event.target.value);
        setConditionType(event.target.value)
        updateProductById(id,event.target.value, 'conditionType')
        console.log(event.target.value);
    };
    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
   console.log(conditionType);
   const valueHandler =  (e:any , id:any) => {
    console.log(id);
    console.log(e.target.value );
    updateProductById(id,e.target.value, 'value')
   }
   const discountTypeHandler = (e:any,id:any) => {
    console.log(e.target.value);
    updateProductById(id,e.target.value, 'discountType')
    // setDiscountType(e.target.value)
   }
   useEffect(() => {
    if(conditionType === false){
        console.log('ok')
    } 
   } , [])

   const quantiiyhandler = (e:any,type:any ,id:any) => {
    if(type === 'none' && conditionType === 0){
        console.log('d');
    setConditionType(1)
    updateProductById(id,1, 'conditionType')
    } 
    if(type === 'none' && conditionType !== 0){
        console.log('d');
        setConditionType(0)
        updateProductById(id,0, 'conditionType')
       } 
    
    if(type === 'all'){
        console.log(e.target.value);
    updateProductById(id,e.target.value, 'quantity')
    updateProductById(id,0, 'quantityLimit')
    updateProductById(id,1, 'conditionType')
    }
    if(type === 'next'){
        console.log(e.target.value);
    updateProductById(id,e.target.value, 'quantityLimit')
    updateProductById(id,0, 'quantity')
    updateProductById(id,2, 'conditionType')
    }
   }
   
    return (
        <div className='h-[68vh] overflow-scroll'> 
            { selectedProduct.length > 0 ?
             selectedProduct.map((product:any) => (
                <section className='grid grid-cols-2  justify-between px-3 mt-2 text-white'>
                    <div className='flex items-center jus'>
                        <img className='w-6 h-6 mr-1' src={alpha.url} alt="" />
                        <span>{product.name}</span>
                    </div>
                    <div className='flex items-center gap-x-3 justify-self-end'>
                        <Select value={product.discountType || 1 } listData={selectData}
                            onChange={(e:any) => discountTypeHandler(e, product.id)}
                            // onChange={(item: any) => setDiscountType(item.target.value)}
                            showProp={'name'} />
                        <NumericFormat
                         onChange={(e:any) => valueHandler(e , product.id)}
                            value={value} className='text-white bg-white/0 text-right
                            border border-maingreen px-2 rounded-[4px]'/>
                        <span className={`text-xl mb-0.5 mr-2 ${ product.discountType == 2 ? 'hidden' : 'block'} `}>%</span>
                        <span className='cursor-pointer' 
                        onClick={() => deleteProductById(product.id)} ><img src={deleteIcons.url}
                         className='h-5 w-5' alt="" />
                         </span>
                    </div>
                    <div  className='col-span-2 my-2 border-b pb-1 border-white/20 '>
                        <ToggleButton label={'Quantity conditions'} value={product.conditionType } 
                        onChange={(e:any) => quantiiyhandler(e,'none', product.id)}
                        // onChange={() => setConditionType(!conditionType)} 
                        />
                       {  product.conditionType    ?
                        <div className=' items-center flex gap-x-3 mt-0 '>
                            <div className='flex items-center'>
                        <NumericFormat
                        onChange={(e) => quantiiyhandler(e,'all', product.id)}
                        disabled={ conditionType === '2' && true}
                            value={'0'} className='text-white bg-white/0 text-right
                      border border-maingreen px-2 rounded-[4px] disabled:cursor-not-allowed
                     '/>
                            <Radio
                                checked={ product.conditionType == 1 }
                                onChange={(e) => handleChange(e,product.id)}
                                value={1}
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        <FormLabel style={{ color : 'white' , fontSize : 13}} >Apply to all</FormLabel>
                        </div>
                        <div className='flex items-center'>
                        <NumericFormat
                        onChange={(e) => quantiiyhandler(e,'next', product.id)}
                        disabled={ conditionType === '1' && true}
                            value={'0'} className='text-white bg-white/0 text-right
                      border border-maingreen px-2 rounded-[4px] disabled:cursor-not-allowed
                             '/>
                            <Radio
                                checked={  product.conditionType == 2 }
                                onChange={(e) => handleChange(e,product.id)}
                                value={2}
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                        <FormLabel style={{ color : 'white', fontSize : 13}} >Apply to next</FormLabel>
                        </div>

                        </div> : ''}
                    </div>
                </section>
                     )) : 
                     <div className='flex flex-col items-center opacity-60 h-full justify-center'>
                        <img src={helpImages.url} alt="" className='h-16 w-16' />
                         <span className='text-xl mt-2'>
                         No item added to promotion
                         </span>                    
                     </div>
            }
        </div>
    );
};
export default SelectedProduct;