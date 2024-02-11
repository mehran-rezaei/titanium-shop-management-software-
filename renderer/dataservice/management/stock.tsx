import axiosInstance from "../Configs/axiosInstance";

export function GetAllStock() {
  return axiosInstance
    .get('/api/Stock/GetAllStocks')
    .then((response) => response);
}
export function PostQuickInventoryCount(barcodeId,quantity) {
  return axiosInstance
    .post('/Document/QuickInventoryCount',{
      barcodeId: barcodeId,
      quantity :  quantity
    })
    .then((response) => response);
}
