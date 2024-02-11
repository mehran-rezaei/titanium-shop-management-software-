import React, { useEffect, useState } from "react";
import Table from "../../../../Common/Table";
import { columns, sample_data } from "./TableData";
import {
  GetAllStock,
  PostQuickInventoryCount,
} from "../../../../../dataservice/management/stock";
import useStockInputStore from "../../../../../store/stocStore";

const index = () => {
  const quantityTypes = useStockInputStore((state) => state.quantityTypes);
  const value = useStockInputStore((state) => state.value);
  const searchType = useStockInputStore((state) => state.searchType);
  const setAllProductNumber = useStockInputStore(
    (state) => state.setAllProductNumber
  );

  const selectedRow = useStockInputStore((state) => state.selectedRow);
  const setSelectedRow = useStockInputStore((state) => state.setSelectedRow);

  console.log(quantityTypes);
  console.log(selectedRow);

  const [stockData, setStockData] = useState<any>(false);
  useEffect(() => {
    GetAllStock()
      .then((Response) => {
        console.log(Response.data);
        setStockData(Response.data);
        setAllProductNumber(Response.data.length);
      })
      .catch((error) => console.log(error));
  }, [selectedRow]);
  let newstock = false;
  if (value.length > 0 && stockData) {
    if (searchType === "name" && stockData)
      newstock = stockData.filter((data: any) =>
        data.productName.includes(value)
      );
    console.log("dd");
  }
  if (searchType === "productCode" && stockData) {
    newstock = stockData.filter((data: any) =>
      data.productCode.includes(value)
    );
    console.log("ff");
  }
  if (searchType === "barcode" && stockData) {
    newstock = stockData.filter((data: any) =>
      data.productCode.includes(value)
    );
  }

  if (stockData && quantityTypes.neqQuantity === true) {
    newstock = stockData.filter((data: any) => data.quantity < 0);
  } else if (stockData && quantityTypes.nonzeroQuantity === true) {
    newstock = stockData.filter((data: any) => data.quantity !== 0);
  } else if (stockData && quantityTypes.zeroQuantity === true) {
    newstock = stockData.filter((data: any) => data.quantity === 0);
  }
  console.log(newstock);
  return (
    <div>
      {newstock && (
        <Table
          SelectedItemId={0}
          onClick={setSelectedRow}
          columns={columns}
          data={newstock}
        />
      )}
      {newstock === false && stockData && (
        <Table
          SelectedItemId={0}
          onClick={setSelectedRow}
          columns={columns}
          data={stockData}
        />
      )}
    </div>
  );
};

export default index;
