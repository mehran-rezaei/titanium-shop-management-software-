import React, { useState  , useEffect} from 'react';
import { barcode ,alpha , search  } from '../../Stock/StockIcons';
import useNewPromotionsStore from '../../../../../store/newPromotions';
import { GetAllGroupForPromotions, GetAllProductForPromotions, GetProductbyGroupid } from '../../../../../dataservice/Promotions/NewPromotionsProvider';
import SelectedProduct from './SelectedProduct';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView  , TreeItem } from '@mui/lab';
// import s from '../../../../../public/icons/Stock_Icons/folder.svg'
const ProductChoose = () => {
  const promotionData = useNewPromotionsStore((state) => state.promotionData)
  const setPromotionData = useNewPromotionsStore((state) => state.setPromotionData)
    const folderImage = '/../../icons/Stock_Icons/folder.svg'
    const plusImage = ' /../../icons/Product_navbar/plus.svg'
    const [ allProducts , setAllProducts] = useState<any>(false)
    const [ Products , setProducts] = useState<any>(false)
    const [ ProductsGroup , setProductsGroup] = useState<any>(false)
    const selectedProduct = useNewPromotionsStore((state) =>  state.selectedProduct)
    const setSelctedProduct = useNewPromotionsStore((state) =>  state.setSelctedProduct)
    const selectedGroup = useNewPromotionsStore((state) =>  state.selectedGroup)
    const setSelctedGroup = useNewPromotionsStore((state) =>  state.setSelctedGroup)
    const searchType = useNewPromotionsStore((state) =>  state.searchType)
    const setSearchType = useNewPromotionsStore((state) =>  state.setSearchType)
    const value = useNewPromotionsStore((state) =>  state.value)
    const setValue = useNewPromotionsStore((state) =>  state.setValue)
    const [type , setType] = useState<string>('alpha')
    const ChangeHandler = (event:any) => {
        console.log(event.target.value);
        setValue(event.target.value);
         }
         useEffect(() => {
            GetAllGroupForPromotions()
            .then(Response => {
                console.log(Response.data)
                setProductsGroup(Response.data)
            })
            .catch( err => console.log(err))
         } , [])
         useEffect(() => {
               GetAllProductForPromotions()
               .then(Response => {
                console.log(Response.data);
                setAllProducts(Response.data)
               })
               .catch( err => console.log(err))
         } , [])
         const getProductbyGroupHandler = (id:any) => {
            setProducts('')
            GetProductbyGroupid(id)
            .then(Response => {console.log(Response);
                setProducts(Response.data)
            })
            .catch( err => console.log(err))
         }
         console.log(selectedGroup);


         let newstock = [];
         if (value.length > 0 && allProducts) {
           if (searchType === "name" && allProducts) {
             newstock = allProducts.filter((data: any) =>
               data.name.includes(value)
             );
           console.log("dd");
         }
         if (searchType === "productCode" && allProducts) {
           newstock = allProducts.filter((data: any) =>
             data.code.includes(value)
           );
           console.log("ff");
         }
         if (searchType === "barcode" && allProducts) {
           newstock = allProducts.filter((data: any) =>
             data.code.includes(value)
           );
         }
        }
        useEffect(() => {
          setPromotionData({ 
            ...promotionData ,
            promotionItems : selectedProduct
        })
        } , [selectedProduct])
        console.log(promotionData);   
    return (
        <div>
      
  
        <section className='w-full flex items-center justify-start gap-x-2 pr-0 overflow-hidden  
            rounded-sm h-11 text-base border border-borderGreen'>
          <div className='flex h-full'>
            <div 
            onClick={() => {
                setSearchType('barcode')
                setType('barcode')}}
            className={`border-r w-10 border-borderGreen h-full flex items-center
             justify-center cursor-pointer  ${type === 'barcode' && 'bg-borderGreen'} `}
             >
              <img className='w-7 h-7' src={barcode.url} alt="" />
            </div>
            <div
             onClick={() => {
                setSearchType('productCode')
                setType('number')}}
             className={`border-r w-10 border-borderGreen h-full flex cursor-pointer 
            items-center justify-center  ${type === 'number' && 'bg-borderGreen'} `}
            >
              123
            </div>
            <div 
            onClick={() => {
                setSearchType('name')
                setType('alpha')}}
            className={`w-10 h-full flex items-center justify-center mr-2 cursor-pointer
             ${type === 'alpha' && 'bg-borderGreen'} 
             `}
             >
            <img className='w-6 h-7 mr-1' src={alpha.url} alt="" />
            </div>
            <div className='w-10 h-full flex items-center justify-center '>
            <img className='w-6 h-6 mr-0' src={search.url} alt="" />
            </div>
            </div>
            <div className='flex items-center'>
              <input 
              placeholder={`Product ${searchType === 'name' ? 'name' : 
               searchType === 'productCode' ? 'Code' : 'barcode' }`}
               type='text' 
              className='bg-white/0 border-none w-40' 
              onChange={() => ChangeHandler(event)}
              />
            </div>
           </section>
            {value.length > 0 || newstock.length > 0  ? newstock.map((products:any) => (
                      <div 
                      onClick={() => setSelctedProduct(products)}
                      className={`w-32 rounded-sm flex gap-y-1 items-center mt-2 ml-2 
                      ${products.id === selectedProduct.id && 'bg-maingreen'}`}>
                         <img className='w-6 h-6 mr-1 ' src={alpha.url} alt="" />
                         <span>{products.name}</span>
                          </div>
            )) 
             :
           <section className='mt-6 ml-6'>
       
              {ProductsGroup && ProductsGroup.map((group:any) => (
                    <TreeView 
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    onClick={() => setSelctedGroup(group)}
                    className='mb-2 '>
                        <TreeItem 

                        onClick={() => getProductbyGroupHandler(selectedGroup.id)}
                         nodeId={group.id} label={group.name} className=' items-center mb-2'>
                          <TreeItem label='' nodeId='' />
                       {/* <img 
                       onClick={() => getProductbyGroupHandler(selectedGroup.id)}
                        className='w-5 h-5 mr-2  cursor-pointer' src={plusImage} alt="" /> */}
                       {/* <img className='w-5 h-5 mr-2 ' src={folderImage} alt="" /> */}
                       {/* <span className='text-sm '>{group.name}</span> */}
                           {selectedGroup.id === group.id && Products && Products.map((product:any) => (
                            <TreeItem label={product.name} nodeId={product.id} />
                    // <div 

                    // onClick={() => setSelctedProduct(product)}
                    // className={`w-32 rounded-sm cursor-pointer flex items-center mt-0 ml-16 
                    // ${product.id === selectedProduct.id && 'bg-maingreen'}`}
                    // >
                    //    <img className='w-6 h-6 mr-1 ' src={alpha.url} alt="" />
                    //    <span>{product.name}</span>
                    //     </div>
                ))}
                       </TreeItem>
                        </TreeView>
                ))} 
           </section>}
        </div>
    );
};

export default ProductChoose;