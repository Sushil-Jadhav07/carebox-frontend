import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamMember from "./TeamMember";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import teamMembers from "@/jsonData/teamMembersData.json";

const TeamSliderSection = ({ style }) => {
  const teamstyle = classNames("cs-team-wrapper", {
    "team-style-1": style !== "style2" || style == undefined || style == null,
    "cs-team-transparent": style === "style2" || style === "style3",
    "cs-cargo-team": style === "style3",
  });

  const container = classNames({
    container: style === "style3",
    "container-fluid": style !== "style3",
  });

  return (
    <section>
      <div className="cs-section-height"></div>
      <div className={teamstyle}>
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"Meet Our Ultra Expert Logistics Team"}
              style={"style2"}
              to={"/team"}
              rightLinkText="View More"
            />
          </div>
        </div>

        <div className="cs-sec-title-height"></div>

        <div className={container}>
          <div className="row cs-members-container">
            <div className="swiper home1-team-slider">
              <Swiper
                spaceBetween={32}
                slidesPerView={"auto"}
                loop={true}
                pagination={{ clickable: true }}
              >
                {teamMembers.map((member) => (
                  <SwiperSlide key={member.id}>
                    <TeamMember member={member} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSliderSection;
