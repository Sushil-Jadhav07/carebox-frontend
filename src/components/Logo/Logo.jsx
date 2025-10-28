import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo_black from "/assets/img/careboxlogo.png";
import logo_white from "/assets/img/careboxlogo.png";

const Logo = () => {
  const defaultHeaderStyle = "default";
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const headerStyle = queryParams.get("h") || defaultHeaderStyle;
  const [logoSrc, setLogoSrc] = useState(logo_black);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1199) {
        setLogoSrc(logo_black);
      } else {
        setLogoSrc(headerStyle === "default" ? logo_black : logo_white);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerStyle]);

  return (
    <div className="cs-logi-header-logo">
      <Link className="cs_site_branding" to="/">
        <img src={logoSrc} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
