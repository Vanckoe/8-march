import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Text = () => {
  const t = useTranslations("ResearchBlockSciText");

  return (
    <div className="w-full relative">
      <div className="relative z-10 container px-[30px]  mx-auto">
        <p className="text-3xl md:text-[38px] font-semibold md:leading-[46px]">
          {t("ResearchBlockSci.description")}
          {/* Научно-исследовательские  — это фундаментальный этап подготовки месторождений к освоению, от которого зависит успех всего проекта        */}
        </p>
        <p className="text-lg font-semibold pt-6">
          {t("ResearchBlockSci.services")}
          {/* Наша компания готова участвовать в выполнении научно-исследовательских работ в области геологии и недропользования, охватывающих широкий спектр тем, связанных с изучением земли, полезных ископаемых и эффективным и экологически безопасным использованием природных ресурсов. */}
        </p>
        <p className="text-xl font-semibold">
          {t("ResearchBlockSci.individualApproach")}
          {/* Профессиональная команда экспертов имеет широкий опыт реализации научно-исследовательских проектов в области: */}
        </p>
        <ul className="text-xl mt-3 font-semibold flex flex-col gap-4 pl-5">
          <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
            {t("ResearchBlockSci.c1")}
          </li>
          <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
            {t("ResearchBlockSci.c2")}
          </li>
          <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
            {t("ResearchBlockSci.c3")}
          </li>
          <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
            {t("ResearchBlockSci.c4")}
          </li>
        </ul>

        {/* <div className="flex flex-col items-stretch mt-12 text-white">
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("PreparationBlockSci.title")}
                Подготовительные работы
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li>{t("PreparationBlockSci.dataCollection")}</li>
                Сбор и анализ существующих геологических данных
                <li>{t("PreparationBlockSci.programDevelopment")}</li>
                Разработка детализированной программы геологоразведочных исследований
                <li>{t("PreparationBlockSci.permits")}</li>
                Получение разрешений на проведение исследований и согласование с регулирующими органами
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("FieldResearchBlockSci.title")}
                Полевые исследования
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li>{t("FieldResearchBlockSci.geophysicalWork")}</li>
                Геофизические работы (магнитная, сейсмическая, гравиметрическая съемка)
                <li>{t("FieldResearchBlockSci.drilling")}</li>
                Бурение разведочных скважин и отбор образцов
                <li>{t("FieldResearchBlockSci.mapping")}</li>
                Картирование территории для определения структуры залежей
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("LaboratoryAnalysisBlock.title")}
                Лабораторные анализы
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li>{t("LaboratoryAnalysisBlock.chemicalAnalysis")}</li>
                Исследование химического и минералогического состава горных пород
                <li>{t("LaboratoryAnalysisBlock.physicalCharacteristics")}</li>
                Оценка физико-механических характеристик, включая устойчивость пород
                <li>{t("LaboratoryAnalysisBlock.suitabilityTests")}</li>
                Проведение тестов на пригодность ископаемых для дальнейшей переработки
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("GeologicalModelingBlock.title")}
                Создание геологических моделей
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li>{t("GeologicalModelingBlock.3DModeling")}</li>
                Построение 3D-моделей залежей полезных ископаемых
                <li>{t("GeologicalModelingBlock.riskForecasting")}</li>
                Прогнозирование объемов запасов и оценка геологических рисков
                <li>{t("GeologicalModelingBlock.efficiencyPlans")}</li>
                Разработка планов по минимизации рисков и увеличению эффективности добычи
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("EnvironmentalResearchBlock.title")}
                Экологические исследования
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li>{t("EnvironmentalResearchBlock.environmentalImpact")}</li>
                Оценка воздействия на окружающую среду
                <li>{t("EnvironmentalResearchBlock.damageReduction")}</li>
                Разработка мер по минимизации экологического ущерба
                <li>
                  {t("EnvironmentalResearchBlock.complianceRecommendations")}
                </li>
                Подготовка рекомендаций для соблюдения экологических стандартов
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="relative h-1/2 block py-96 mt-10 w-full ">
        <Image
          src="/activity/Mining2bg.png"
          alt="Background"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          className="z-0 hidden md:block"
        />
        <Image
          src="/activity/Mining2bgMini.png"
          alt="Background"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          className="z-0 md:hidden"
        />
      </div>
    </div>
  );
};

export default Text;
