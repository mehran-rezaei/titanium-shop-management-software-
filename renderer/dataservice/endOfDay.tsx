import axiosInstance from "./Configs/axiosInstance";

export function GetEndOfDay() {
  return axiosInstance
    .get(`CashierShift/GetAllCashierShifts`)
    .then((response) => response);
}
// https://apititanium.etokco.ir/CashierShift/GetAllCashierShifts
