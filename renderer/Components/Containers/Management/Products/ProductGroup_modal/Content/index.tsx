import { useState } from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import useProductGroupStore from "../../../../../../store/productGroupStore";

function Index() {
  const showSection = () => {
    switch (state) {
      case 1:
        return (
          <Section1
            productGroup={productGroup}
            setProductProperty={setProductProperty}
          />
        );
      case 2:
        return <Section2 />;
      case 3:
        return <Section3 />;

      default:
        break;
    }
  };
  const [state, setState] = useState(1);

  const productGroup = useProductGroupStore((state) => state.productGroup);
  const setProductProperty = useProductGroupStore(
    (state) => state.setProductProperty
  );

  const onClick = (id: number) => {
    setState(id);
  };
  return (
    <div className="flex flex-col w-full px-5 py-2 h-full">
      <Header state={state} onClick={onClick} />
      <div className=" h-[85%]">{showSection()}</div>
      <div className=" h-[5%]  flex gap-2 ">
        <button className=" px-6 rounded-md text-white border border-[#00A5A5]">
          Save
        </button>
        <button className=" px-6 rounded-md text-white border border-[#00A5A5]">
          Cancell
        </button>
      </div>
    </div>
  );
}

export default Index;
