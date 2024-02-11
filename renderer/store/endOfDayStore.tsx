import { create } from 'zustand'

interface inputStore {
    EndDaypageType : any,
    setEndDayPageType : (data:any) => void
    EndDaytype: any
    setEndDaytype: (data: number) => void;
    // quantityTypes : any;
    // setQuantityTypes : ( data:any ) => void
    // selectedRow : any;
    // setSelectedRow : (data:any) => void
    // allPruductNumber : any,
    // setAllProductNumber : (data:any) => void
  }

const useEndDayStore = create<inputStore>((set) => ({
    EndDaypageType : 1,
    setEndDayPageType : (data) => set((state) => ({ EndDaypageType: state.EndDaypageType = data })), 
    EndDaytype: 1,
    setEndDaytype : (data) => set((state) => ({ EndDaytype: state.EndDaytype = data })),
    // quantityTypes : {
    //     neqQuantity : false,
    // },
    // setQuantityTypes : (data) => set((state) => ({ quantityTypes : state.quantityTypes = data })),
    // selectedRow  : '',
    // setSelectedRow : (data) => set((state) => ({ selectedRow : state.selectedRow = data })),
    // allPruductNumber : '',
    // setAllProductNumber : (data) => set((state) => ({ allPruductNumber : state.allPruductNumber = data }))

}))
export default useEndDayStore;