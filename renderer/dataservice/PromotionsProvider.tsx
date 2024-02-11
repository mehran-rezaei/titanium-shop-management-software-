import axiosInstance from "./Configs/axiosInstance";

export function GetAllPromotions() {
  return axiosInstance
    .get(`Promotion/GetAllPromotions`)
    .then((response) => response);
}

export function DeletePromotions(id:any) {
  return axiosInstance
    .delete(`Promotion/DeletePromotion/${id}`)
    .then((response) => response);
}


