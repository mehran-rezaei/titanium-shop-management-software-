import * as React from "react";
import Drawer from "@mui/material/Drawer";

type Anchor = "right";

function Index({ url, name }) {
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
        <img className="h-10 w-10" src={url} alt="" />
        <p>{name}</p>
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {/* <Content /> */}
        <div className="w-[500px] h-full"></div>
      </Drawer>
    </>
  );
}

export default Index;
