import { useEffect, useState } from "react";
import CustomInput from "../../../../../../Common/CustomInput";
import Toggle from "../../../../../../Common/Toggle";
import Tax from "./Tax";
import { GetAllTaxes } from "../../../../../../../dataservice/management/product";
import CustomNumberInput from "../../../../../../Common/CustomNumberInput";

function Index({ product, setProductProperty, addTax }) {
  useEffect(() => {
    GetAllTaxes().then((Response) => {
      setState({ AllTaxes: Response.data });
    });
  }, []);
  const [state, setState] = useState({ AllTaxes: [] });

  function calculateSalePrice(cost, margin) {
    return Number(cost) + Number(cost) * (Number(margin) / 100);
  }
  function calculateMargin(cost, price) {
    return (Number(price) - Number(cost)) % (Number(price) * 100);
  }

  function updateProductWithNewValues(cost, margin, price) {
    if (price == null) {
      const salePrice = calculateSalePrice(cost, margin);
      console.log(typeof salePrice);

      // Update the product state with the new values
      setProductProperty("cost", cost);
      setProductProperty("margin", margin);
      setProductProperty("price", salePrice);
    } else {
      const calMagin = calculateMargin(cost, price);
      setProductProperty("cost", cost);
      setProductProperty("margin", calMagin);
      setProductProperty("price", price);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Tax
        listData={state.AllTaxes}
        setProductProperty={setProductProperty}
        value={product.taxList}
        addTax={addTax}
      />
      <CustomNumberInput
        suffix={""}
        prefix={""}
        thousandSeparator={true}
        label="Cost"
        value={product.cost}
        type="number"
        onChange={(e) => {
          const numericValue = parseFloat(e.target.value.replace(/,/g, ""));
          updateProductWithNewValues(numericValue, product.margin, null);
        }}
      />
      <CustomNumberInput
        suffix={" %"}
        prefix={""}
        thousandSeparator={false}
        label="Margin"
        value={product.margin}
        type="number"
        onChange={(e) => {
          const numericValue = parseFloat(e.target.value.replace("%", ""));
          updateProductWithNewValues(product.cost, numericValue, null);
        }}
      />
      <CustomNumberInput
        suffix={""}
        prefix={""}
        thousandSeparator={true}
        label="sale price"
        value={product.price}
        type="number"
        onChange={(e) => {
          const numericValue = parseFloat(e.target.value.replace(/,/g, ""));
          // setProductProperty("price", numericValue);
          updateProductWithNewValues(
            product.cost,
            product.margin,
            numericValue
          );
        }}
      />
      <Toggle
        label={"Price includes tax"}
        value={product.isTaxInclusivePrice}
        onChange={(e) => {
          setProductProperty("isTaxInclusivePrice", e.target.checked);
        }}
      />
      <Toggle
        label={"Price change allowed"}
        value={product.isPriceChangeAllowed}
        onChange={(e) => {
          setProductProperty("isPriceChangeAllowed", e.target.checked);
        }}
      />
    </div>
  );
}

export default Index;
