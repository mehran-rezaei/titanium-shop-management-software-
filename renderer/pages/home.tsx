import React from "react";
import Head from "next/head";
import Link from "next/link";
import Sale from "../Components/Containers/Sale";
import ViewSaleHistory from "../Components/Containers/Sale/ViewSaleHistory";
import HomeContainer from '../Components/Containers/Home'
import Breadcrumbs from "../Components/Common/BreadCrump/Breadcrumbs";



function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
  
      <Breadcrumbs
          items={[
            {
              label: "Titanium",
              path: "/home",
            },
            {
              label: "Home",
              path: "/home",
            },
          ]}
        />

       
      <HomeContainer />
      {/* <Sale/> */}
      {/* <ViewSaleHistory /> */}
    </React.Fragment>
  );
}

export default Home;
