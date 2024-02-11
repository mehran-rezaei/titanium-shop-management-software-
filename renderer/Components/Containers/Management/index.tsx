import Container from "./Container";
import Sidebar from "./sidebar";

function Management_Container() {
  return (
    <div className="w-full h-[95vh] bg-[#302E2E] grid grid-cols-12 gap-x-2 ">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 ">
        <Container />
      </div>
    </div>
  );
}

export default Management_Container;
