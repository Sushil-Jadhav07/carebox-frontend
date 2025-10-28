import React from "react";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import HeroSliderThree from "@/components/Slider/HeroSliderThree";
import AboutStyleOne from "@/components/About/AboutStyleOne";
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
import AboutSection from "@/components/About/About";
import Marquee from "@/components/Marquee/Marquee";
import WhyChoose from "@/components/Services/WhyChoose";

function Home() {
  return (
    <>
      <HeroSliderThree />
      {/* <ClientAreaAbout /> */}
      {/* <AboutStyleOne /> */}

      <AboutSection />

      
      {/* <Counter style="style2" /> */}
      <ServiceOfferList />
      {/* <WhyChooseUs /> */}

      <WhyChoose />

      <Marquee />
      {/* <MovingTextSection style={"style2"} /> */}
      {/* <FullWidthVideo /> */}
      {/* <TeamSliderSection style={"style2"} /> */}
      {/* <TouchMap /> */}
      {/* <RecentNews /> */}
      {/* <TouchFrom /> */}
    </>
  );
}

export default Home;
