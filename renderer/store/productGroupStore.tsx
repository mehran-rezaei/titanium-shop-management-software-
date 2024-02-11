import { create } from "zustand";
import { productGroup } from "../interfaces/productGroup"; // Corrected the interface name

interface ProductStore {
  productGroup: productGroup; // Corrected the type name
  setProductGroup: (newProductGroup: productGroup) => void;
  resetProductGroup: () => void;
  setProductProperty: (property: keyof productGroup, value: any) => void;
}

const useProductGroupStore = create<ProductStore>((set) => ({
  productGroup: {
    id: 0,
    name: "",
    color: "",
    parentGroupId: 0,
  },
  setProductGroup: (newProductGroup) =>
    set((state) => ({
      ...state,
      productGroup: newProductGroup,
    })),
  resetProductGroup: () =>
    set((state) => ({
      ...state,
      productGroup: {
        id: 0,
        name: "",
        color: "",
        parentGroupId: 0,
      },
    })),
  setProductProperty: (property, value) =>
    set((state) => ({
      productGroup: {
        ...state.productGroup,
        [property]: value,
      },
    })),
}));

export default useProductGroupStore;
