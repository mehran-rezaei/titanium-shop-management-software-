import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { changeTheme } from "../utils/helperTheme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{changeTheme("Dark")},[])
  return <Component {...pageProps} />;
}

export default MyApp;
