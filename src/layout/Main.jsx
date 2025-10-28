import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderSection from "./Header/HeaderSection";
import Footer from "./Footer/Footer";
import ScrollUpBtn from "@/components/ScrollUpBtn/ScrollUpBtn";
import useScrollRestoration from "@/hooks/useScrollRestoration";

const Main = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultHeaderStyle = "style2";
  const headerStyle = queryParams.get("h") || defaultHeaderStyle;

  useEffect(() => {
    useScrollRestoration();
  }, [location]);

  return (
    <>
      <HeaderSection style={headerStyle} />
      <Outlet />
      <Footer />
      <ScrollUpBtn />
    </>
  );
};

export default Main;
