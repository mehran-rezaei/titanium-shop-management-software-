import { useState } from "react";
import Header from "./Header";
import Company_data from "./Company_data";

function My_Company() {
  const [state, setState] = useState({ activeSection: 1 });

  const handleChangeSection = (id) => {
    setState({ ...state, activeSection: id });
  };
  return (
    <div className=" w-full h-full p-1">
      <div className="h-[5%] w-full border-b border-border ">
        <Header activeSection={state.activeSection} handleChangeSection={handleChangeSection} />
      </div>
      <div className="h-[95%] w-full flex  pr-1 gap-2"><Company_data/></div>
    </div>
  );
}

export default My_Company;
