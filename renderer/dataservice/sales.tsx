import axiosInstance from "./Configs/axiosInstance";

export function GetAllProducts(data: any) {
  return axiosInstance
    .get(`/Barcode/GetAllProducts?searchTerm=${data}`)
    .then((response) => response);
}
export function GetBarcodeForSaleById(id: any,qty) {
  return axiosInstance
    .get(`/Barcode/GetBarcodeForSaleById/1?Quantity=${qty}`)
    .then((response) => response);
}
