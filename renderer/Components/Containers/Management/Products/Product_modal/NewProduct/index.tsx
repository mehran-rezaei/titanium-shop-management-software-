import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Content from "../content";
import useProductStore from "../../../../../../store/productStore";

type Anchor = "right";

export default function index({ url, name }: any) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
      useProductStore.getState().resetProduct();
    };

  return (
    <>
      <div
        onClick={toggleDrawer("right", true)}
        className="cursor-pointer flex flex-col items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
        </svg>

        <p className="text-sm text-typography">{name}</p>
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div className="w-[500px] h-full bg-[#302E2E]">
          {" "}
          <Content />
        </div>
      </Drawer>
    </>
  );
}
