import Edit_ProductGroup from "../ProductGroup_modal/Edit_ProductGroup";
import New_ProductGroup from "../ProductGroup_modal/New_ProductGroup";
import EditProduct from "../Product_modal/EditProduct";
import NewProduct from "../Product_modal/NewProduct";
import { handleDeleteProduct } from "../utils/deleteProduct";
import Icons from "./Icons";

function Index({ isProductSelectedInfo, isProductGroupSelectedInfo }) {
  return (
    <div className="flex gap-8 px-10 items-center justify-between h-full">
      <Icons
        handleClick={() => {
          handleDeleteProduct(isProductSelectedInfo.Id);
        }}
        activeInfo={isProductGroupSelectedInfo}
        url={"../../../../icons/Product_navbar/refresh.svg"}
        name={"Refresh"}
      />
      <NewProduct
        name={"New product"}
        url={"../../../../icons/Product_navbar/plus.svg"}
      />
      <New_ProductGroup
        name={"New Group"}
        url={"../../../../icons/Product_navbar/file_document.svg"}
      />
      <EditProduct
        activeInfo={isProductSelectedInfo}
        name={"Edit Product"}
        url={"../../../../icons/Product_navbar/pencil.svg"}
      />
      <Edit_ProductGroup
        activeInfo={isProductGroupSelectedInfo}
        name={"Edit Group"}
        url={"../../../../icons/Product_navbar/file_document_edit.svg"}
      />

      <Icons
        handleClick={() => {
          handleDeleteProduct(isProductSelectedInfo.Id);
        }}
        activeInfo={isProductGroupSelectedInfo}
        url={"../../../../icons/Product_navbar/file_document_remove.svg"}
        name={"Delete Group"}
      />
      <Icons
        handleClick={() => {
          handleDeleteProduct(isProductSelectedInfo.Id);
        }}
        activeInfo={isProductSelectedInfo}
        url={"../../../../icons/Product_navbar/delete.svg"}
        name={"Delete Product"}
      />
    </div>
  );
}

export default Index;
