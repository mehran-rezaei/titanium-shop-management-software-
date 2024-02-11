import Table from "../../../Common/Table";
import {
  Documents_Table_columns,
  documentsData,
} from "./Documents_Table_config";
import {
  Documentsitem_Table_columns,
  documentItemsData,
} from "./Documentsitem_Table_config";
import Header from "./Header";

function Index() {
  return (
    <div className="w-screen h-screen px-4 pb-2">
      <div className="w-full h-[10%]">
        <Header />
      </div>
      <div className="w-full h-[90%] flexflex-col ">
        <div className="h-[7%] w-full flex items-center ">
          <p className="w-36">Document</p>
          <div className="bg-[#00A5A5] h-[1px] w-full"></div>
        </div>
        <div className="w-full h-[43%] overflow-y-scroll ">
          <div className="">
            <Table
              SelectedItemId={0}
              columns={Documents_Table_columns}
              data={documentsData}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="h-[7%] w-full flex items-center">
          <p className="w-40">Document Item</p>
          <div className="bg-[#00A5A5] h-[1px] w-full"></div>
        </div>

        <div className=" w-full h-[43%] overflow-y-scroll">
          <div className="">
            <Table
              SelectedItemId={0}
              columns={Documentsitem_Table_columns}
              data={documentItemsData}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
