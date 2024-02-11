import { Stack, Chip } from "@mui/material";
import CustomInput from "../../../../../../../Common/CustomInput";
import { useState } from "react";

function Index({ addBarcode, product, onDeleteBarcode }) {
  const handleDelete = (index) => {
    const updatedBarcodeList = [...product.barcodeList];
    updatedBarcodeList.splice(index, 1);
    onDeleteBarcode(updatedBarcodeList);
  };
  const [state, setState] = useState("");
  return (
    <div className="flex flex-col gap-3">
      {/* <CustomInput
        label="Brcode"
        value=""
        type={"number"}
        onChange={handleNameChange}
      /> */}
      <p className="text-white">Brcode</p>
      <div className="relative">
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          value={state}
          className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <button
          onClick={() => {
            addBarcode({
              salePrice: 0,
              description: "",
              unitOfMeasureId: 0,
              code: state,
            }),
              setState("");
          }}
          className="text-white absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-xs px-2 py-2 "
        >
          Add
        </button>
      </div>
      <Stack direction="row" spacing={1}>
        {product.barcodeList.map((item, index) => (
          <Chip
            id={index}
            sx={{ color: "white", bgcolor: "#00A5A5" }}
            label={item.code}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Index;
