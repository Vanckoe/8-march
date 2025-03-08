"use client";
import React from "react";
import ServicesCard from "@/components/servicesCard";
import { useTranslations } from "next-intl";

const handleButtonClick = (message: string) => {
  console.log(message);
};
// const t = useTranslations("Services");
const Services = () => {
  const t = useTranslations("Services");

  const defaultCards = [
    {
      imageSrc: "/services/5.png",
      title: t("servicesList.consulting"),
      description: t("servicesList.documentationPreparation"),
      link: "/activity/document",
      onButtonClick: () => handleButtonClick(t("servicesList.consulting")),
    },
    {
      imageSrc: "/services/1.png",
      title: t("servicesList.explorationAndAnalysis"),
      description: t("servicesList.professionalExploration"),
      link: "/activity/analysis",
      onButtonClick: () =>
        handleButtonClick(t("servicesList.explorationAndAnalysis")),
    },
    {
      imageSrc: "/services/2.png",
      title: t("servicesList.geologicalSurveys"),
      description: t("servicesList.feasibilityStudies"),
      link: "/activity/geology",
      onButtonClick: () =>
        handleButtonClick(t("servicesList.geologicalSurveys")),
    },
    {
      imageSrc: "/services/3.png",
      title: t("servicesList.development"),
      description: t("servicesList.processManagement"),
      link: "/activity/field",
      onButtonClick: () => handleButtonClick(t("servicesList.development")),
    },
    {
      imageSrc: "/services/4.png",
      title: t("servicesList.construction"),
      description: t("servicesList.projectImplementation"),
      link: "/activity/construction",
      onButtonClick: () => handleButtonClick(t("servicesList.construction")),
    },
    {
      imageSrc: "/services/7.png",
      title: t("servicesList.research"),
      description: t("servicesList.scientificSolutions"),
      link: "/activity/mining",
      onButtonClick: () => handleButtonClick(t("servicesList.research")),
    },
  ];

  return (
    <div className="mx-auto container px-[30px] w-full flex flex-col">
      <h1 className="text-[#224A87]">{t("title")}</h1>
      <p className="text-2xl font-medium mt-3">{t("description")}</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {defaultCards.map((card, index) => (
          <ServicesCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            link={card.link}
            onButtonClick={card.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
