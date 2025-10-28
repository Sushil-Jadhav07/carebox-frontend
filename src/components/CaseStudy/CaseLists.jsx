import React from "react";
import CaseItem from "./CaseItem";

import casesData from "@/jsonData/caseData.json";

const CaseLists = () => {
  return (
    <section>
      <div className="cs-case-list-wrap">
        <div className="cs-case-list-on">
          <div className="container">
            <div className="row cs-raw-in-col9">
              {casesData.map((caseItem, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <CaseItem caseItem={caseItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseLists;
