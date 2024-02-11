import axiosInstance from "../Configs/axiosInstance";

export function GetAllTaxes() {
  return axiosInstance
    .get(`/Tax/GetAllTaxes`)
    .then((response) => response);
}
