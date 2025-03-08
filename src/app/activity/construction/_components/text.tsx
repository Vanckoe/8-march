import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Text = () => {
  const t = useTranslations("ConstructionTextBlock");

  return (
    <div className="w-full relative ">
      <div className="relative z-10 container px-[30px] md:mb-32 mx-auto">
        <p className="text-3xl md:text-[38px] font-semibold md:leading-[46px]">
          {t("ConstructionBlock.description")}
        </p>
        <p className="text-lg font-semibold pt-6">
          {t("ConstructionBlock.services")}
        </p>
        <p className="text-xl font-semibold ">
          {t("ConstructionBlock.experience")}
        </p>
        <div className="flex flex-col items-stretch mt-12 text-white">
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("DesignBlock.title")}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="text-white text-lg flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("DesignBlock.technicalDocumentation")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("DesignBlock.processDesign")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("DesignBlock.environmentalConsiderations")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("FactoryConstructionBlock.title")}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("FactoryConstructionBlock.fullCycle")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("FactoryConstructionBlock.equipmentInstallation")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("FactoryConstructionBlock.safeConditions")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("InfrastructureBlock.title")}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("InfrastructureBlock.additionalFacilities")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("InfrastructureBlock.utilityProvision")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("InfrastructureBlock.preparationForOperation")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("TurnkeyDeliveryBlock.title")}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("TurnkeyDeliveryBlock.qualityControl")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("TurnkeyDeliveryBlock.reportDocumentation")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("TurnkeyDeliveryBlock.staffTraining")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-[500px]">
        <Image
          src="/activity/Construction2bg.png"
          alt="background"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          className="z-0"
        />
      </div>
    </div>
  );
};

export default Text;
