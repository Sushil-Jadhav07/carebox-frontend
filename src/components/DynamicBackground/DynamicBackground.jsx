import React, { useEffect, useRef } from "react";

const DynamicBackground = ({ children, className, dataSrc }) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current && dataSrc) {
      divRef.current.style.backgroundImage = `url(${dataSrc})`;
    }
  }, []);

  return (
    <div ref={divRef} className={className} data-src={dataSrc}>
      {children}
    </div>
  );
};

export default DynamicBackground;
