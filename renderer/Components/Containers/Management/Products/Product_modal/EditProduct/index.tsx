import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Content from "../content";

type Anchor = "right";

export default function Index({ url, name, activeInfo }: any) {
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
    };

  return (
    <>
      <div
        onClick={!activeInfo.isActive ? undefined : toggleDrawer("right", true)}
        className={`cursor-pointer flex flex-col items-center ${
          !activeInfo.isActive ? "opacity-30" : ""
        }`}
      >
        <img className="h-7 w-7" src={url} alt="" />
        <p className="text-sm">{name}</p>
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
