import Left_side from "./Left_side";
import Right_side from "./Right_Side";

function Sale_body({state}:any) {
  return (
    <div className="w-full h-[90%] grid grid-cols-12">
      <Left_side state={state}/>
      <Right_side />
    </div>
  );
}

export default Sale_body;
