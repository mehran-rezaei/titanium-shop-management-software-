import axiosInstance from "../Configs/axiosInstance";

export function GetAllProducts() {
  return axiosInstance
    .get(`/Product/GetAllProducts`)
    .then((response) => response);
}
export function GetAllProductGroups() {
  return axiosInstance
    .get(`/ProductGroup/GetAllProductGroups`)
    .then((response) => response);
}
export function GetAllUnitOfMeasures() {
  return axiosInstance
    .get(`/UnitOfMeasure/GetAllUnitOfMeasures`)
    .then((response) => response);
}
export function GetAllTaxes() {
  return axiosInstance.get(`/Tax/GetAllTaxes`).then((response) => response);
}
export function GetAllSuppliers() {
  return axiosInstance
    .get(`/Supplier/GetAllSuppliers`)
    .then((response) => response);
}
export function DeleteProduct(id) {
  return axiosInstance
    .get(`/Product/DeleteProduct?id=${id}`)
    .then((response) => response);
}
