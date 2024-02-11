import { useState } from "react";

function Index({ value, onChange }) {
  const [state, setState] = useState({ active: false });
  return (
    <div
      onClick={() => {
        setState({ ...state, active: true });
      }}
      className="flex rounded-md border border-[#00A5A5] hover:border-[#00A5A5] "
    >
      {state.active ? (
        <>
          <input
            type="text"
            value={value}
            onChange={onChange}
            style={{ backgroundColor: "transparent" }}
            className="  px-2 py-2  text-white transition w-16 "
          />
        </>
      ) : (
        <div className="px-5 py-2 hover:bg-[#00a5a537] cursor-pointer">Qty</div>
      )}
    </div>
  );
}

export default Index;
