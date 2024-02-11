import { useState } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Header from "./Header";

import useProductStore from "../../../../../../store/productStore";

function Product_content() {
  const showSection = () => {
    switch (state) {
      case 1:
        return (
          <Section1
            product={product}
            setProductProperty={setProductProperty}
            addBarcode={addBarcode}
          />
        );
      case 2:
        return (
          <Section2
            product={product}
            setProductProperty={setProductProperty}
            addTax={addTax}
          />
        );
      case 3:
        return (
          <Section3 product={product} setProductProperty={setProductProperty} />
        );
      case 4:
        return <Section4 />;
      case 5:
        return <Section5 />;

      default:
        break;
    }
  };

  const onClick = (id: number) => {
    setState(id);
  };

  const product = useProductStore((state) => state.product);
  const setProductProperty = useProductStore(
    (state) => state.setProductProperty
  );
  const addBarcode = useProductStore((state) => state.addBarcode);
  const addTax = useProductStore((state) => state.addTax);
  console.log(product);

  const [state, setState] = useState(1);
  return (
    <div className="flex flex-col w-full px-5 py-2 h-full">
      <Header state={state} onClick={onClick} />
      <div className=" h-[85%]">{showSection()}</div>
      <div className=" h-[5%]  flex gap-2 ">
        <button className=" px-6 rounded-md text-white border border-[#00A5A5]">Save</button>
        <button className=" px-6 rounded-md text-white border border-[#00A5A5]">Cancell</button>
      </div>
    </div>
  );
}

export default Product_content;
