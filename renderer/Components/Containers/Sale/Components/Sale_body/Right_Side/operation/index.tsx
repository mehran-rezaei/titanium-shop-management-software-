import TemporaryDrawer from "../../../Sidbar_menu";
import Operation_btn from "./Operation_btn";

function Operation() {
  return (
    <div className="w-full h-[40%]   grid   grid-cols-12 gap-x-4 gap-y-4 p-4">
      <Operation_btn content="cheek price" />
      <Operation_btn content="open drawer" />
      <Operation_btn content="voidorder" />
      <Operation_btn content="print last invoce" />
      <TemporaryDrawer />
      <Operation_btn content="Delete" />
    </div>
  );
}

export default Operation;
