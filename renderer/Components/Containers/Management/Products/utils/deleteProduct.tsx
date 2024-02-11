import { DeleteProduct } from "../../../../../dataservice/management/product";

export const handleDeleteProduct = (id) => {
  DeleteProduct(id).then((Response) => {
    Response.data;
  });
};
