import React from "react";
import TechHiro from "./_components/techHiro";
import Materials from "./_components/materials";
import Automation from "./_components/automation";
import TechBenefits from "./_components/techBenefits";
// import Contacts from "../main/_components/contacts";

const TechnologyPage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <TechHiro />
      <Materials />
      <Automation />
      <TechBenefits />
      {/* <Contacts /> */}
    </div>
  );
};

export default TechnologyPage;
