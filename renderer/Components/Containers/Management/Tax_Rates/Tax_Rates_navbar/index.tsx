import Icons from "../../Products/Product_navbar/Icons";
import New_Tax_Rates from "../New_Tax_Rates";

function Index() {
  return (
    <div className="flex gap-10 items-center justify-evenly h-full">
      <Icons
        url={"../../../../icons/Product_navbar/refresh.svg"}
        name={"Refresh"}
      />
      <New_Tax_Rates name={"Add"} url={"../../../../icons/Product_navbar/plus.svg"} />
      <Icons
        name={"Edit"}
        url={"../../../../icons/Product_navbar/pencil.svg"}
      />
      <Icons
        url={"../../../../icons/Product_navbar/delete.svg"}
        name={"Delete"}
      />
      <Icons
        url={"../../../../icons/Product_navbar/print.svg"}
        name={"Print"}
      />
      </div>
  );
}

export default Index;
