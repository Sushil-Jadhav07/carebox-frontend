import React from "react";
import { Link } from "react-router-dom";

const CaseItem = ({ caseItem }) => {
  return (
    <div className="cs-case-item">
      <div className="cs-case-img">
        <img src={caseItem.image} alt={caseItem.alt} />
      </div>
      <div className="cs-case-item-details">
        <Link
          to={`/case-study-details/${caseItem.id}`}
          className="cs-case-item-content"
        >
          <h6 className="cs_white_color">{caseItem.title}</h6>
          <p>{caseItem.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default CaseItem;
