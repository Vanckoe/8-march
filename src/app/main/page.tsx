import React from "react";
import AboutHero from "./_components/aboutHero";
import WhoWeAre from "./_components/whoWeAre";
import Benefits from "./_components/benefits";
// import Services from "./_components/services";
// import News from "./_components/news";
import ContactsMain from "./_components/contactMain";
import Unicum from "../about/_components/unicum";
import TechBenefits from "../technology/_components/techBenefits";

const About = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <AboutHero />
      <WhoWeAre />
      <Benefits />
      {/* <Services /> */}
      {/* <News /> */}
      <TechBenefits />
      <Unicum />
      <ContactsMain />
    </div>
  );
};

export default About;
