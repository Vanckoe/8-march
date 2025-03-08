import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Text = () => {
  const t = useTranslations("ResearchAndAnalysis");

  return (
    <div className="w-full relative ">
      <div className="relative z-10 container px-[30px] md:mb-60 mx-auto">
        <p className="text-3xl md:text-[38px] font-semibold md:leading-[46px]">
          {/* Компетентный поиск и анализ месторождений – основа успешного проекта в сфере геологии и недропользования. */}
          {t("ResearchBlock.correctExploration")}
        </p>
        <p className="text-lg font-semibold pt-6">
          {/* Мы предлагаем профессиональный анализ перспективных участков для выявления полезных ископаемых. Мы предоставляем точную информацию для принятия обоснованных решений о дальнейшей разработке месторождений.. */}
          {t("ResearchBlock.professionalServices")}
        </p>
        <p className="text-xl font-semibold ">
          {/* Наши специалисты используют современные методы исследования и передовые технологии, что позволяет нам точно и оперативно оценить каждый участок для дальнейшей разработки. */}
          {t("ResearchBlock.modernMethods")}
        </p>
        <div className="flex flex-col items-stretch mt-12 text-white">
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("DataAnalysisBlock.title")}
                {/* Анализ данных и оценка рентабельности:{" "} */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {/* Изучение геологических и геохимических характеристик
                  месторождения */}
                  {t("DataAnalysisBlock.evaluation")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {/* Проведение буровых работ для взятия образцов породы и
                  минералов */}
                  {t("DataAnalysisBlock.risksAssessment")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {/* Оценка глубины залегания, структуры и состава полезных
                  ископаемых */}
                  {t("DataAnalysisBlock.reporting")}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("RecommendationsBlock.title")}
                {/* Заключение и рекомендации{" "} */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {/* Изучение геологических и геохимических характеристик
                  месторождения */}
                  {t("RecommendationsBlock.developmentMethods")}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {/* Проведение буровых работ для взятия образцов породы и
                  минералов */}
                  {t("RecommendationsBlock.environmentalImpact")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-[500px]">
        <Image
          src="/activity/activityAnalys2Bg.png"
          alt="Background"
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
