import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import CaseDetailsPost from "@/components/CaseStudy/CaseDetailsPost";
import SimilarCaseItem from "@/components/CaseStudy/SimilarCaseItem";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import CtaSection from "@/components/CtaSection/CtaSection";

// Import the JSON data
import caseDetailsData from "@/jsonData/CasePosts.json";
import casesData from "@/jsonData/caseData.json";

const CaseStudyDetails = () => {
  const { caseItemId } = useParams();
  const [similarCase, setSimilarCase] = useState([]);

  const currentCaseDetails = caseDetailsData.find(
    (post) => post.caseId === parseInt(caseItemId)
  );

  useEffect(() => {
    if (!currentCaseDetails) return;

    const similar = casesData
      .filter((post) => {
        if (post.caseId === parseInt(caseItemId)) return false;
        const currentTitleWords = currentCaseDetails.title
          .toLowerCase()
          .split(" ");
        const postTitleWords = post.title.toLowerCase().split(" ");
        const matchingWords = currentTitleWords.filter((word) =>
          postTitleWords.includes(word)
        );
        return matchingWords.length > 0;
      })
      .slice(0, 3);

    setSimilarCase(similar);
  }, [caseItemId, currentCaseDetails]);

  if (!currentCaseDetails) {
    return <div>Case not found</div>;
  }

  return (
    <>
      <BreadCrumb title={"Case Details"} />
      <div className="cs-section-height"></div>
      <CaseDetailsPost caseDetailsData={currentCaseDetails} />
      <div className="cs-section-height"></div>
      <SimilarCaseItem similarCases={similarCase} />
      <CtaSection style={"style2"} bg={"none"} />
      <div className="cs-section-height"></div>
      <ClientAreaAbout />
    </>
  );
};

export default CaseStudyDetails;
