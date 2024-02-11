import Slider from "@mui/material/Slider";
import Product_navbar from "./Product_navbar";
import Products_Groups from "./Products_Groups";
import Table from "../../../Common/Table";
import { columns } from "./Table_config";
import { sample_data } from "./Table_config";
import { useEffect, useState } from "react";
import {
  GetAllProductGroups,
  GetAllProducts,
} from "../../../../dataservice/management/product";

import useProductStore from "../../../../store/productStore";
import useProductGroupStore from "../../../../store/productGroupStore";

function Products() {
  const [state, setState] = useState({
    data: [],
    productGroup: [],
  });
  const Product = useProductStore((state) => state.product);
  const ProductGroup = useProductGroupStore((state) => state.productGroup);
  console.log(ProductGroup);

  const isProductSelectedInfo =
    Product.id === 0
      ? { isActive: false, Id: 0 }
      : { isActive: true, Id: Product.id };
  const isProductGroupSelectedInfo =
    ProductGroup.id === 0
      ? { isActive: false, Id: 0 }
      : { isActive: true, Id: ProductGroup.id };

  useEffect(() => {
    GetAllProducts().then((Response) => {
      setState((prevState) => ({
        ...prevState,
        data: Response.data,
      }));
    });
    GetAllProductGroups().then((Response) => {
      setState((prevState) => ({
        ...prevState,
        productGroup: Response.data,
      }));
    });
  }, []);

  const handleRowClick = (rowData) => {
    if (rowData.id == Product.id) useProductStore.getState().resetProduct();
    else useProductStore.getState().setProduct(rowData);
  };
  const handleGroupClick = (GroupData) => {
    if (GroupData.id == ProductGroup.id)
      useProductGroupStore.getState().resetProductGroup();
    else useProductGroupStore.getState().setProductGroup(GroupData);
  };

  return (
    <div className=" w-full h-full">
      <div className="h-1/6 w-full">
        <Product_navbar
          isProductGroupSelectedInfo={isProductGroupSelectedInfo}
          isProductSelectedInfo={isProductSelectedInfo}
        />
      </div>
      <div className="h-5/6  w-full flex pl-2 pb-0 pr-1  gap-2">
        <div className="w-1/5 resize-x overflow-hidden min-w-[200px] border  border-[#00A5A5] rounded-t-3xl p-2">
          <Products_Groups
            handleGroupClick={handleGroupClick}
            treeData={state.productGroup}
          />
        </div>
        <div className="w-4/5 border border-[#00A5A5] rounded-tl-3xl overflow-hidden">
          <Table
            SelectedItemId={Product.id}
            columns={columns}
            onClick={handleRowClick}
            data={state.data}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
