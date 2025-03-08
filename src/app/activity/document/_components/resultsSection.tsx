import React from "react";
import Image from "next/image";
import Done from "@/assets/Done";
import { useTranslations } from "next-intl";

const ResultsSection = () => {
  const t = useTranslations("ResultsBlockConsulting");

  return (
    <div className="relative w-full pb-14 pt-20 flex items-end">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/activity/resulbg.png"
          alt="Фон секции"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 text-white container mx-auto px-[30px] flex flex-col gap-5 md:flex-row md:justify-between items-start md:gap-20 w-full">
        <h1>
          {t("title")}
          {/* Результат услуги */}
        </h1>
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="text-xl font-semibold flex flex-row items-center gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 flex">
              <Done />
            </div>
            {t("completeDocumentation")}
            {/* Полностью готовый пакет документов для начала или продолжения работы */}
          </div>
          <div className="text-xl font-semibold flex flex-row items-center gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 flex">
              <Done />
            </div>
            {t("reducedAdministrativeBurden")}
            {/* Снижение административной нагрузки и рисков несоответствия требованиям */}
          </div>
          <div className="text-xl font-semibold flex flex-row items-center gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 flex">
              <Done />
            </div>
            {t("standardsCompliance")}
            {/* Уверенность в том, что проект соответствует всем нормативным и экологическим стандартам */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
