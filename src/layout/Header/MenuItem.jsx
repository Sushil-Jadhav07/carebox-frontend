import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const [showMenu, setShowMenu] = useState(false);

  const showsubnav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <li
      className={
        item.subItems.length > 0
          ? `menu-item-has-children ${showMenu ? "active" : ""}`
          : ""
      }
    >
      <Link to={item.path} className="cs-text_b_line">
        <span>{item.title}</span>
      </Link>
      {item.subItems.length > 0 && (
        <>
          <ul>
            {item.subItems.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link to={subItem.path} className="cs-text_b_line">
                  <span>{subItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <span
            className={`cs_munu_dropdown_toggle ${showMenu ? "active" : ""}`}
            onClick={showsubnav}
          ></span>
        </>
      )}
    </li>
  );
};

export default MenuItem;
