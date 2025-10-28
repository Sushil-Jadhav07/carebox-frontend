import React from "react";
import HeroSliderTwo from "@/components/Slider/HeroSliderTwo";
import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
import ServiceOfferList from "@/components/Services/ServiceOfferList";
import Testimonials from "@/components/Testimonial/Testimonials";
import Counter from "@/components/Counter/Counter";
import TeamSliderSection from "@/components/TeamMembers/TeamSliderSection";
import MovingTextSection from "@/components/MovingText/MovingTextSection";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import RecentNews from "@/components/Blogs/RecentNews";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import MapFrom from "@/components/Contact/MapFrom";
import AboutStyleThree from "@/components/About/AboutStyleThree";
import CompanyFeatureVideoPlayer from "@/components/CompanyFeature/CompanyFeatureVideoPlayer";

const OceanCargo = () => {
  return (
    <>
      <HeroSliderTwo />
      <ExpertiseSection style="style2" />
      <AboutStyleThree />
      <ServiceOfferList style={"style2"} />
      <Testimonials />
      <Counter />
      <CompanyFeatureVideoPlayer />
      <TeamSliderSection style={"style3"} />
      <MovingTextSection style={"style2"} />
      <ProjectSlider />
      <RecentNews />
      <div className="cs-section-height"></div>
      <ClientAreaAbout />
      <div className="cs-section-height"></div>
      <MapFrom />
    </>
  );
};

export default OceanCargo;
