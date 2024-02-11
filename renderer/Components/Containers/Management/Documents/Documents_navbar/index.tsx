import Icons from "./Icons";

function Index() {
  return (
    <div className="flex gap-20 items-center h-full">
      <Icons
        url={"../../../../icons/Product_navbar/refresh.svg"}
        name={"Refresh"}
      />
      <Icons name={"Add"} url={"../../../../icons/Product_navbar/plus.svg"} />
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
