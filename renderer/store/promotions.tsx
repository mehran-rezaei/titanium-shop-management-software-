import { create } from 'zustand'

interface dataStore {
    AllPromotionsdata : any,
    setAllPromotionsdata : (data:any) => void
    SelectedPromotions: any,
    setSelectedPromotions: (data: any) => void;

  }
const usePromotionsStore = create<dataStore>((set) => ({
    AllPromotionsdata : false,
    setAllPromotionsdata : (data) => set((state) => ({ AllPromotionsdata: state.AllPromotionsdata = data })), 
    SelectedPromotions: false,
    setSelectedPromotions : (data) => set((state) => ({ SelectedPromotions: state.SelectedPromotions = data })),
}))
export default usePromotionsStore;