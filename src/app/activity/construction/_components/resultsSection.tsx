import React from "react";
import Image from "next/image";
import Done from "@/assets/Done";
import { useTranslations } from "next-intl";

const ResultsSection = () => {
  const t = useTranslations("ResultsBlockConstruction");

  return (
    <div className="relative w-full pb-14 pt-20 flex items-end">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/activity/resulbg.png"
          alt="Background"
          /* Фон секции */
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 text-white container mx-auto px-[30px] flex flex-col gap-5 md:flex-row md:justify-between items-start md:gap-20 w-full">
        <h1 className="w-full">
          {t("title")}
          {/* Результат услуги */}
        </h1>
        <div className="flex flex-col w-full gap-6">
          <div className="text-xl font-semibold flex flex-row items-center gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 flex">
              <Done />
            </div>
            {t("fullyOperationalFacility")}
            {/* Полностью готовый к работе промышленный объект */}
          </div>
          <div className="text-xl font-semibold flex flex-row items-center gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 flex">
              <Done />
            </div>
            {t("reliableInfrastructure")}
            {/* Надежная и эффективная инфраструктура для переработки полезных
            ископаемых */}
          </div>
          <div className="text-xl font-semibold flex flex-row items-center gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 flex">
              <Done />
            </div>
            {t("costReduction")}
            {/* Снижение эксплуатационных затрат благодаря современным технологиям */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
