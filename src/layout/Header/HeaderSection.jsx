import React, { useRef } from "react";
import classNames from "classnames";
import MainHeader from "./MainHeader";
import HeaderTopbar from "./HeaderTopbar";
import HeaderEmailPhone from "./HeaderEmailPhone";
import HeaderSideBar from "./HeaderSideBar";
import useStickyHeader from "@/hooks/useStickyHeader";
import useSidebar from "@/hooks/useSidebar";

const HeaderSection = ({ style }) => {
  const headerRef = useRef(null);

  const { isSticky, isHeaderVisible } = useStickyHeader(headerRef);

  const { isSideBarOpen, setIsSideBarOpen, sidebarRef, sidebarBtnRef } =
    useSidebar();

  const navClass = classNames(
    "cs_sticky_header",
    "cs_site_header",
    "cs_style1",
    {
      "cs-header-with-bg": style !== "style2",
      "header-no-bg": style === "style2" || style === "style3",
      "header-no-right-area": style === "style2",
      cs_gescout_sticky: isSticky,
      cs_gescout_show: isHeaderVisible === isSticky,
    }
  );

  const sideBarOpenClass = classNames("cs_side_header", {
    active: isSideBarOpen,
  });

  return (
    <>
      <header ref={headerRef} className={navClass}>
        {style !== "style2" && <HeaderTopbar />}

        <MainHeader setIsSideBarOpen={setIsSideBarOpen} ref={sidebarRef} />
        {style !== "style2" && <HeaderEmailPhone />}
      </header>
      <HeaderSideBar className={sideBarOpenClass} ref={sidebarBtnRef} />
    </>
  );
};

export default HeaderSection;
