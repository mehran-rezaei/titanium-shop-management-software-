import { useCallback, useEffect } from "react";
import List from "./list";
import Table from "../../Table";
import { columns, sampleData } from "../../Table/Table_config";

function Left_side({ state }: any) {
  console.log(state);

  return (
    <div className="col-span-9 w-full h-full flex flex-col items-center rounded-tr-[20px] overflow-hidden border-t-2 border-r-2 border-[#00CEC9]">
      <Table
        columns={columns}
        SelectedItemId={0}
        onClick={() => {}}
        data={sampleData}
      />
      <div className="h-[10%] w-[95%] flex items-center justify-center px-10">
        <div className="flex w-[80%] rounded-md bg-maingreen py-3 justify-evenly items-center">
          <p>subtotal</p>
          <p>$42</p>
          <p>$42</p>
          <p>$42</p>
          <p>$42</p>
        </div>
      </div>
    </div>
  );
}

export default Left_side;
