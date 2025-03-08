import React from "react";
import Image from "next/image";
import Ecology from "@/assets/Ecology";
import { useTranslations } from "next-intl";

const Automation = () => {
  const t = useTranslations("AutomationAndSmartSolutions");

  return (
    <div className="w-full relative mb-10">
      <div className="relative z-10 container mx-auto px-6 md:px-12 md:pb-2 pt-12">
        <h1 className="text-[#1151AB] mb-12">{t("title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          {/* Левый блок */}
          <div className="relative ">
            <div className="absolute inset-0 z-0">
              <Image
                src="/technology/autoLeft.png"
                alt={t("drillingRobots")}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative z-10 px-[30px] pb-[30px] pt-[260px] md:px-[50px] md:pb-[60px]">
              <h2 className="text-[28px] md:w-[80%] leading-[30px] md:leading-[35px] md:text-[32px] font-bold mb-3 text-white">
                {t("drillingRobots")}
              </h2>
              <p className="mb-3 text-white md:w-[80%] text-sm md:text-base font-medium">
                {t("automaticPositioning")}
              </p>
              <p className=" text-white md:w-[80%] text-sm md:text-base font-medium">
                {t("adaptationToConditions")}
              </p>
            </div>
          </div>

          {/* Правый блок */}
          <div className="relative ">
            <div className="absolute inset-0 z-0">
              <Image
                src="/technology/autoRight.png"
                alt={t("smartTransportSystems")}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative z-10 px-[30px] pb-[30px] pt-[260px] md:px-[50px] md:pb-[60px]">
              <h2 className="text-[28px] md:w-[80%] leading-[30px] md:leading-[35px] md:text-[32px] font-bold mb-3 text-white">
                {t("smartTransportSystems")}
              </h2>
              <p className="mb-3 text-white md:w-[80%] text-sm md:text-base font-medium">
                {t("materialUnloadingSystems")}
              </p>
              <p className=" text-white md:w-[80%] text-sm md:text-base font-medium">
                {/* <div className="bg-white w-full md:w-fit  text-[#1151AB] p-4"> */}
                {t("enhancedSafety")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1151AB]">
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start container mx-auto px-6 pt-11 md:pt-[75px] md:px-12">
          <div className="flex flex-col w-full gap-3 md:gap-5">
            <Ecology color="white" width="48" height="48" />
            <h1 className=" text-white">{t("environmentalTechnologies")}</h1>
          </div>

          <div className="w-full -mb-[88px] flex flex-col gap-3.5">
            <div className="flex flex-col">
              <div className="p-8 bg-white">
                <p className="text-2xl font-semibold">{t("mixers")}:</p>
                <p className="text-base font-medium">{t("dustReduction")}</p>
              </div>
              <div className="py-5 px-8 bg-[#2E6BC1]">
                <p className="text-base font-medium text-white">
                  {t("workerComfort")}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="p-8 bg-white">
                <p className="text-2xl font-semibold">
                  {t("noiseReductionSolutions")}:
                </p>
                <p className="text-base font-medium">
                  {t("noiseReducingMaterials")}
                </p>
              </div>
              <div className="py-5 px-8 bg-[#2E6BC1]">
                <p className="text-base font-medium text-white">
                  {t("mixingPrecision")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
