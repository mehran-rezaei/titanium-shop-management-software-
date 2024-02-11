import { create } from 'zustand'

interface SettingStore {
    selectedButton : any,
    setSelectedItem : (data:any) => void
    // value: any

  }

const useSettingStore = create<SettingStore>((set) => ({
    selectedButton : 'basic',
    setSelectedItem: (data) => set((state) => ({ selectedButton: state.selectedButton = data })), 
    // value: '',
 
}))
export default useSettingStore;