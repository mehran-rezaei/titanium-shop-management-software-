import { useEffect, useState } from "react";
import CustomInput from "../../../../../../Common/CustomInput";
import { GetAllProductGroups } from "../../../../../../../dataservice/management/product";
import Select from "../../../../../../Common/Select";

function Index({ productGroup, setProductProperty }) {
  const [state, setState] = useState({
    productGroup: [],
  });
  useEffect(() => {
    GetAllProductGroups().then((Response) => {
      setState((prevState) => ({
        ...prevState,
        productGroup: Response.data,
      }));
    });
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        label="Name"
        value={productGroup.name}
        type={"text"}
        onChange={(e) => {
          setProductProperty("name", e.target.value);
        }}
      />

      <div className="flex flex-col gap-3">
        <Select
          label={"Group"}
          value={productGroup.parentGroupId}
          listData={state.productGroup}
          showProp="groupPath"
          onChange={(e) => {
            setProductProperty("parentGroupId", e.target.value as string);
          }}
        />
      </div>
    </div>
  );
}

export default Index;
