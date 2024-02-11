import axiosInstance from "../Configs/axiosInstance";

export function GetAllProductForPromotions() {
  return axiosInstance
    .get(`Product/GetAllProducts`)
    .then((response) => response);
}
export function GetAllGroupForPromotions() {
    return axiosInstance
      .get(`ProductGroup/GetAllProductGroups`)
      .then((response) => response);
  }
  export function GetProductbyGroupid(id:any) {
    return axiosInstance
      .get(`Product/GetAllProducts?ProductGroupId=${id}`)
      .then((response) => response);
  }
  export function CreatePromotions(data:any,selectedProduct:any,daysweek:any) {
    return axiosInstance
      .post(`Promotion/CreatePromotion`,{
        // name: data.name,
        // startDate: data.startDate,
        // endDate: data.endDate,
        // isHappyHour: data.isHappyHour,
        // daysOfWeek: 'All',
        // isEnabled: data.isEnabled,
        // promotionItems: selectedProduct
          name: data.name,
          startDate: data.startDate,
          endDate: data.endDate,
          isHappyHour: data.isHappyHour,
          daysOfWeek: daysweek,
          isEnabled: data.isEnabled,
          promotionItems: selectedProduct
      })
      .then((response) => response);
  }

  

