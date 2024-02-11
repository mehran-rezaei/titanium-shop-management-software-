import CustomInput from "../../../../../../Common/CustomInput";
import Toggle from "../../../../../../Common/Toggle";
import Select from "../../../../../../Common/Select";
import Barcode from "./Barcode";
import { useEffect, useState } from "react";
import {
  GetAllProductGroups,
  GetAllUnitOfMeasures,
} from "../../../../../../../dataservice/management/product";

function Index({ product, setProductProperty, addBarcode }) {
  const [state, setState] = useState({
    productGroup: [],
    Unitofmeasurement: [],
  });
  useEffect(() => {
    GetAllProductGroups().then((Response) => {
      setState((prevState) => ({
        ...prevState,
        productGroup: Response.data,
      }));
    });
    GetAllUnitOfMeasures().then((Response) => {
      setState((prevState) => ({
        ...prevState,
        Unitofmeasurement: Response.data,
      }));
    });
  }, []);
  const onDeleteBarcode = (updatedBarcodeList) => {
    setProductProperty("barcodeList", updatedBarcodeList);
  };
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        label="Name"
        value={product.name}
        type={"text"}
        onChange={(e) => {
          setProductProperty("name", e.target.value);
        }}
      />
      <CustomInput
        label="Code"
        value={product.code}
        type={"text"}
        onChange={(e) => {
          setProductProperty("code", e.target.value);
        }}
      />
      <Barcode
        addBarcode={addBarcode}
        product={product}
        onDeleteBarcode={onDeleteBarcode}
      />
      <Select
        label={"Unit of measurement"}
        value={product.unitOfMeasureId}
        listData={state.Unitofmeasurement}
        showProp="name"
        onChange={(e) => {
          setProductProperty("unitOfMeasureId", e.target.value as string);
        }}
      />
      <Select
        label={"Group"}
        value={product.productGroupId}
        listData={state.productGroup}
        showProp="groupPath"
        onChange={(e) => {
          setProductProperty("productGroupId", e.target.value as string);
        }}
      />
      <Toggle
        label={"Active"}
        value={product.isEnabled}
        onChange={(e) => {
          setProductProperty("isEnabled", e.target.checked);
        }}
      />
      <Toggle label={"Default quantity"} value={false} onChange={() => {}} />
      <Toggle
        label={"Service (not using stock)"}
        value={product.isService}
        onChange={(e) => {
          setProductProperty("isService", e.target.checked);
        }}
      />
      <CustomInput
        label="Age restriction"
        value={product.ageRestriction}
        type={"number"}
        onChange={(e) => {
          setProductProperty("ageRestriction", e.target.value);
        }}
      />
    </div>
  );
}

export default Index;
