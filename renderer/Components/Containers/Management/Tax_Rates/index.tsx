import { useEffect, useState } from "react";
import Table from "../../../Common/Table";
import { columns } from "./Table_config";
import Tax_Rates_navbar from "./Tax_Rates_navbar";
import { Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { GetAllTaxes } from "../../../../dataservice/management/tax_rates";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

function Tax_Rates() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetAllTaxes().then((Response) => {
      setData(Response.data);
    });
  }, []);
  return (
    <div className=" w-full h-full grid grid-rows-6">
      <div className="row-span-1 ">
        <Tax_Rates_navbar />
      </div>
      <div className="row-span-5 grid grid-cols-12 pl-2 pb-0  gap-2">
        <div className="col-span-12 border border-[#00A5A5] rounded-tl-3xl">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Tax_Rates;
