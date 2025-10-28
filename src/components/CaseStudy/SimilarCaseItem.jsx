import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CaseItem from "./CaseItem";

const SimilarCaseItem = ({ similarCases }) => {
  return (
    <section>
      <div className="cs-case-list-wrap">
        <div className="cs-case-list-on">
          <div className="container">
            <SectionTitle
              title={"Similar Case Study"}
              captext={"Similar Case Study"}
              to="/case-study"
              style={"style2"}
            />
          </div>

          <div className="cs-sec-title-height"></div>

          <div className="container">
            <div className="row cs-blog-items-container similar-post">
              {similarCases.map((caseItem) => (
                <div className="col-lg-4 col-md-6" key={caseItem.id}>
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

export default SimilarCaseItem;
