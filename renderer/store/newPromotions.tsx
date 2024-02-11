import { create } from 'zustand'
import SelectedProduct from '../Components/Containers/Management/Promotions_Actions/NewPromotions/SelectedProduct';

interface dataStore {
    searchType : any,
    setSearchType : (data:any) => void
    value: any
    setValue: (data: number) => void;
    selectedProduct : any;
    setSelctedProduct: (data: number) => void;
    selectedGroup : any;
    setSelctedGroup: (data: number) => void;
    deleteProductById : (data : number) => void;
    updateProductById : ( id: any,newdata : any , dataname : any) => void;

    promotionData  : any;
    setPromotionData : (data:any) => void;

  }
const useNewPromotionsStore = create<dataStore>((set) => ({
    searchType : 'name',
    setSearchType : (data) => set((state) => ({ searchType: state.searchType = data })), 
    value: false,
    setValue : (data) => set((state) => ({ value: state.value = data })),
    selectedProduct : '',
    // setSelctedProduct : (data) => set((state) => ({ selectedProduct:  state.selectedProduct = data })),
    // setSelctedProduct: (data) => set((state) => ({ selectedProduct: data })),
    setSelctedProduct: (data) => set((state) => ({ selectedProduct: [...state.selectedProduct, data] })),
    deleteProductById: (id) => set((state) => ({
      selectedProduct: state.selectedProduct.filter((item:any) => item.id !== id),})),
      updateProductById: (id, newData , dataname) => set((state) => ({
        selectedProduct: state.selectedProduct.map((item:any) => {
          if (item.id === id) {
            // Merge the existing item with the new data
            return { ...item, [dataname] : newData };
          }
          return item;
        }),  })),



    selectedGroup : '',
    setSelctedGroup : (data) => set((state) => ({ selectedGroup: state.selectedGroup = data })),
    
    promotionData  : {
      name: "",
      startDate: "",
      endDate: "",
      isHappyHour: false,
      daysOfWeek: [],
      isEnabled: true,
      promotionItems : []
    },
    setPromotionData: (data) => set((state) => ({ promotionData: state.promotionData = data })),
    
    // AllPromotionsdata : false,
    // setAllPromotionsdata : (data) => set((state) => ({ AllPromotionsdata: state.AllPromotionsdata = data })), 
    // SelectedPromotions: false,
    // setSelectedPromotions : (data) => set((state) => ({ SelectedPromotions: state.SelectedPromotions = data })),

}))
export default useNewPromotionsStore;