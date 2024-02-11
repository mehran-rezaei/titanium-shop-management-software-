import { useEffect } from "react";
import usePageStore from "../../../../store/pageStore";
import Products from "../Products";
import Dashboard from "../Dashboard";
import Documents from "../Documents";
import Stock from "../Stock";
import Reporting from "../Reporting";
import Customers_Suppliers from "../Customers_Suppliers";
import Promotions_Actions from "../Promotions_Actions";
import Users_Secunity from "../Users_Secunity";
import Print_stations from "../Print_stations";
import Countries from "../Countries";
import Tax_Rates from "../Tax_Rates";
import My_Company from "../My_Company";

function Container() {
  const selectedPage: number = usePageStore((state) => state.selectedPage);
  const pageComponentMap = usePageStore((state) => state.pageComponentMap);
  const ComponentToRender = pageComponentMap[selectedPage];
  return (
    <>
      {ComponentToRender === "Dashboard" && <Dashboard />}
      {ComponentToRender === "Documents" && <Documents />}
      {ComponentToRender === "Products" && <Products />}
      {ComponentToRender === "Stock" && <Stock />}
      {ComponentToRender === "Reporting" && <Reporting />}
      {ComponentToRender === "Customers_&_Suppliers" && <Customers_Suppliers />}
      {ComponentToRender === "Promotions_&_Actions" && <Promotions_Actions />}
      {ComponentToRender === "Users_&_Secunity" && <Users_Secunity />}
      {ComponentToRender === "Print_stations" && <Print_stations />}
      {ComponentToRender === "Countries" && <Countries />}
      {ComponentToRender === "Tax_Rates" && <Tax_Rates />}
      {ComponentToRender === "My_Company" && <My_Company />}
    </>
  );
}

export default Container;
