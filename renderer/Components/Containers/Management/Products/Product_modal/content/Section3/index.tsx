import { useEffect, useState } from "react";
import CustomInput from "../../../../../../Common/CustomInput";
import Select from "../../../../../../Common/Select";
import Toggle from "../../../../../../Common/Toggle";
import { GetAllSuppliers } from "../../../../../../../dataservice/management/product";

function Index({ product, setProductProperty }) {
  useEffect(() => {
    // GetAllSuppliers().then((Response) => {
    //   setState({ AllSuppliers: Response.data });
    // });
  });
  const [state, setState] = useState({ AllSuppliers: [] });

  return (
    <div className="flex flex-col gap-3">
      <Select
        listData={state.AllSuppliers}
        label={"Supplier"}
        showProp="name"
        value={true}
        onChange=""
      />
      <CustomInput
        label="Reorder Point"
        value={product.reorderPoint}
        type={"text"}
        onChange={(e) => {
          setProductProperty("reorderPoint", e.target.value);
        }}
      />
      <CustomInput
        label="Preferred quantity"
        value={product.preferredQuantity}
        type={"text"}
        onChange={(e) => {
          setProductProperty("preferredQuantity", e.target.value);
        }}
      />
      <Toggle
        label={"Low stock warning"}
        value={product.isLowStockWarning}
        onChange={(e) => {
          setProductProperty("isLowStockWarning", e.target.checked);
        }}
      />
      {product.isLowStockWarning ? (
        <CustomInput
          label="Low stock warning"
          value={product.lowStockWarningQuantity}
          type={"text"}
          onChange={(e) => {
            setProductProperty("lowStockWarningQuantity", e.target.value);
          }}
        />
      ) : null}
    </div>
  );
}

export default Index;
