import React from "react";
import TeamMember from "./TeamMember";

import teamMembers from "@/jsonData/teamMembersData.json";

const TeamSection = () => {
  return (
    <div className="cs-team-wrapper team-style-1">
      <div className="container-fluid">
        <div className="row cs-members-container cs-raw-in-col8">
          {teamMembers.map((member) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <TeamMember id={member.id} member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
