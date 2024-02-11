export interface Product {
  id: number;
  ageRestriction: number;
  color: string;
  code: string;
  isEnabled: boolean;
  isPriceChangeAllowed: boolean;
  isService: boolean;
  isTaxInclusivePrice: boolean;
  isUsingDefaultQuantity: boolean;
  margin: number;
  cost: number;
  price: number;
  productGroupId: number;
  unitOfMeasureId: number;
  name: string;
  description: string;
  reorderPoint: number;
  preferredQuantity: number;
  isLowStockWarning: boolean;
  lowStockWarningQuantity: number;
  barcodeList: BarcodeItem[];
  taxList: TaxItem[];
}

export interface BarcodeItem {
  salePrice: number;
  description: string;
  unitOfMeasureId: number;
  code: string;
}

export interface TaxItem {
  taxId: number;
}
