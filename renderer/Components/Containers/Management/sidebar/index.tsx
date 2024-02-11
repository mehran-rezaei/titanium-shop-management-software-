import { useState } from "react";
import Sidebar_btn from "./sidebar_btn";

function Sidebar() {
  const [state, setState] = useState(4);
  const onClick = (id) => setState(id);
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex h-fit flex-col  ">
        <Sidebar_btn active_id={state} id={1} content={"Dashboard"} />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={2}
          content={"Documents"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={3}
          content={"Products"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={4}
          content={"Stock"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={5}
          content={"Reporting"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={6}
          content={"Customers & Suppliers"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={7}
          content={"Promotions & Actions"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={8}
          content={"Users & Secunity"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={9}
          content={"Print stations"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={10}
          content={"Payment Types"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={11}
          content={"Countries"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={12}
          content={"Tax Rates"}
        />
        <Sidebar_btn
          onClick={onClick}
          active_id={state}
          id={13}
          content={"My Company"}
        />
      </div>
      <div className="h-full border-r border-[#00CEC9]/40"></div>
    </div>
  );
}

export default Sidebar;
