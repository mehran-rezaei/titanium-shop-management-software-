import { create } from "zustand";
import { BarcodeItem, Product, TaxItem } from "../interfaces/product";

interface ProductStore {
  product: Product;
  setProductProperty: (property: keyof Product, value: any) => void;
  setProduct: (newProduct: Product) => void;
  resetProduct: () => void;
  addBarcode: (barcodeItem: BarcodeItem) => void;
  addTax: (taxItem: TaxItem) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  product: {
    id: 0,
    ageRestriction: 0,
    color: "",
    code: "",
    isEnabled: true,
    isPriceChangeAllowed: true,
    isService: true,
    isTaxInclusivePrice: true,
    isUsingDefaultQuantity: true,
    margin: 0,
    cost: 0,
    price: 0,
    productGroupId: 2147483647,
    unitOfMeasureId: 0,
    name: "",
    description: "",
    reorderPoint: 0,
    preferredQuantity: 0,
    isLowStockWarning: true,
    lowStockWarningQuantity: 0,
    barcodeList: [
      // {
      //   salePrice: 0,
      //   description: "",
      //   unitOfMeasureId: 0,
      //   code: "",
      // },
    ],
    taxList: [
      // {
      //   taxId: 0,
      // },
    ],
  },
  setProduct: (newProduct) =>
    set((state) => ({
      ...state,
      product: newProduct,
    })),

  resetProduct: () =>
    set((state) => ({
      ...state,
      product: {
        id: 0,
        ageRestriction: 0,
        color: "",
        code: "",
        isEnabled: true,
        isPriceChangeAllowed: true,
        isService: true,
        isTaxInclusivePrice: true,
        isUsingDefaultQuantity: true,
        margin: 0,
        cost: 0,
        price: 0,
        productGroupId: 2147483647,
        unitOfMeasureId: 0,
        name: "",
        description: "",
        reorderPoint: 0,
        preferredQuantity: 0,
        isLowStockWarning: true,
        lowStockWarningQuantity: 0,
        barcodeList: [],
        taxList: [],
      },
    })),

  setProductProperty: (property, value) =>
    set((state) => ({
      product: {
        ...state.product,
        [property]: value,
      },
    })),

  addBarcode: (barcodeItem) =>
    set((state) => {
      if (barcodeItem.code == "") {
        return state;
      }
      // Check if a barcode with the same code exists
      const barcodeCodeExists = state.product.barcodeList.some(
        (barcode) => barcode.code === barcodeItem.code
      );

      if (barcodeCodeExists) {
        // Barcode with the same code already exists, handle it as needed
        console.warn(`Barcode with code "${barcodeItem.code}" already exists.`);
        return state; // Return the current state without making any changes
      }

      // Barcode with a unique code, add it to the list
      return {
        product: {
          ...state.product,
          barcodeList: [...state.product.barcodeList, barcodeItem],
        },
      };
    }),

  addTax: (newTaxList) =>
    set((state) => {
      // Check if a tax item with the same taxId already exists
      // const taxIdExists = state.product.taxList.some(
      //   (existingTax) => existingTax.taxId === taxItem.taxId
      // );

      // if (taxIdExists) {
      //   // Tax with the same taxId already exists, handle it as needed
      //   console.warn(`Tax with taxId "${taxItem.taxId}" already exists.`);
      //   let updatedValue = state.product.taxList.filter(
      //     (tax) => tax.taxId !== taxItem.taxId
      //   );
      //   return {
      //     product: {
      //       ...state.product,
      //       taxList: updatedValue,
      //     },
      //   };
      // }

      // Tax with a unique taxId, add it to the list
      return {
        product: {
          ...state.product,
          taxList: [...state.product.taxList, newTaxList],
        },
      };
    }),
}));

export default useProductStore;
