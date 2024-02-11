import { create } from 'zustand'

interface inputStore {
    searchType : any,
    setSearchType : (data:any) => void
    value: any
    setValue: (data: number) => void;
    quantityTypes : any;
    setQuantityTypes : ( data:any ) => void
    selectedRow : any;
    setSelectedRow : (data:any) => void
    allPruductNumber : any,
    setAllProductNumber : (data:any) => void
  }

const useStockInputStore = create<inputStore>((set) => ({
    searchType : 'name',
    setSearchType : (data) => set((state) => ({ searchType: state.searchType = data })), 
    value: '',
    //   setValue : (data) => set = (() => ({ value :  data }))
    setValue : (data) => set((state) => ({ value: state.value = data })),
    quantityTypes : {
        neqQuantity : false,
    },
    setQuantityTypes : (data) => set((state) => ({ quantityTypes : state.quantityTypes = data })),
    selectedRow  : '',
    setSelectedRow : (data) => set((state) => ({ selectedRow : state.selectedRow = data })),
    allPruductNumber : '',
    setAllProductNumber : (data) => set((state) => ({ allPruductNumber : state.allPruductNumber = data }))

}))
export default useStockInputStore;