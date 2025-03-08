import React from "react";
import Title from "./_components/title";
import Description from "./_components/description";
import AboutBenefits from "./_components/aboutBenefits";
// import Partners from "./_components/partners";
import Unicum from "./_components/unicum";
// import News from "../main/_components/news";
// import Contacts from "../main/_components/contacts";
// import Team from "./_components/team";

const AboutPage = () => {
  return (
    <div className="flex relative flex-col gap-[100px]">
      <Title />
      <Description />
      <AboutBenefits />
      {/* <Partners /> */}
      <Unicum />
      {/* <Team /> */}
      {/* <News /> */}
      {/* <Contacts /> */}
    </div>
  );
};

export default AboutPage;
