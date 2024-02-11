import { TextField } from "@mui/material";
import AutoCompleteInput from "../AutoCompleteInput";
import Qty_input from "../Qty_input";
import { useState } from "react";

function Sale_header({ setData, Data, autocompleteRef }: any) {
  const [state, setState] = useState({ Qty_number: 1 });
  return (
    <div className="w-full h-[10%] xl:p-4 md:p-2 sm:p-1">
      <div className=" w-full h-full flex items-center gap-2">
        <div className=" ">
          <AutoCompleteInput
            Qty_number={state.Qty_number}
            autocompleteRef={autocompleteRef}
            Data={Data}
            setData={setData}
          />
        </div>
        {/* <div
          onClick={() => {
            setState([]);
          }}
          className="px-6 py-1  border border-[#00CEC9] rounded-xl text-xs flex justify-center items-center "
        >
          QTY
        </div> */}
        <Qty_input
          value={state.Qty_number}
          onChange={(e) => {
            setState({ ...state, Qty_number: e.target.value });
          }}
        />
        <div className="px-5 py-2 hover:bg-[#00a5a537] cursor-pointer rounded-md border border-[#00A5A5] hover:border-[#00A5A5]">
          Add
        </div>
      </div>
    </div>
  );
}

export default Sale_header;
