import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Content from "../Content";

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
          <path
            fill="currentColor"
            d="M23 18H20V15H18V18H15V20H18V23H20V20H23M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16H8Z"
          />
        </svg>
        <p className="text-sm text-typography">{name}</p>
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div className="w-[500px] h-full bg-[#302E2E]">
          <Content />
        </div>
      </Drawer>
    </>
  );
}
