import Numpad from "./numpad";
import Operation from "./operation";
import Payment from "./payment";

function Right_side() {
  return (
    <div className="col-span-3 w-full h-full ">
      <Operation />
      <Numpad />
      <Payment />
    </div>
  );
}

export default Right_side;
