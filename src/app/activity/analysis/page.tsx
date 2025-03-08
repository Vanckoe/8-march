import React from "react";
// import Contacts from "@/app/main/_components/contacts";
import Zero from "./_components/zero";
import Text from "./_components/text";
import WhyMe from "./_components/whyMe";
import ResultsSection from "./_components/resultsSection";

const Analysis = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Zero />
      <Text />
      <WhyMe />
      <ResultsSection />
      {/* <Contacts /> */}
    </div>
  );
};

export default Analysis;
