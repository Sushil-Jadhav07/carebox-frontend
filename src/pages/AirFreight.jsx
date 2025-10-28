import React from "react";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import HeroSliderThree from "@/components/Slider/HeroSliderThree";
import AboutStyleTwo from "@/components/About/AboutStyleTwo";
import Counter from "@/components/Counter/Counter";
import TeamSliderSection from "@/components/TeamMembers/TeamSliderSection";
import FullWidthVideo from "@/components/VideoSection/FullWidthVideo";
import MovingTextSection from "@/components/MovingText/MovingTextSection";
import RecentNews from "@/components/Blogs/RecentNews";
import TouchFrom from "@/components/Contact/TouchFrom";
import TouchMap from "@/components/Contact/TouchMap";
import ServiceOfferList from "@/components/Services/ServiceOfferList";
import WhyChooseUs from "@/components/Services/WhyChooseUs";

const AirFreight = () => {
  return (
    <>
      <HeroSliderThree />
      <ClientAreaAbout />
      <AboutStyleTwo />
      {/* <Counter style="style2" /> */}
      <ServiceOfferList />
      <WhyChooseUs />
      <MovingTextSection style={"style2"} />
      {/* <FullWidthVideo /> */}
      {/* <TeamSliderSection style={"style2"} /> */}
      <TouchMap />
      {/* <RecentNews /> */}
      <TouchFrom />
    </>
  );
};

export default AirFreight;
