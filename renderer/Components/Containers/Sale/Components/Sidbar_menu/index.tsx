import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Content from "./content";

type Anchor = "right";

export default function TemporaryDrawer() {
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
        onClick={toggleDrawer("right", true)}
        className="border-[#00CEC9] border flex justify-center items-center  col-span-6 rounded-lg xl:text-base lg:text-sm md:text-xs sm:text-[10px] overflow-hidden"
      >
        option
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Content />
      </Drawer>
    </>
  );
}
