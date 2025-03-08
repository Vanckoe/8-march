import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Text = () => {
  const t = useTranslations("MiningDevelopmentText");

  return (
    <div className="w-full relative">
      <div className="relative z-10 container px-[30px] md:mb-20 mx-auto">
        <p className="text-3xl md:text-[42px] font-semibold  md:leading-[46px]">
          {t("MiningDevelopmentBlock.description")}
          {/* Разработка месторождений — это сложный процесс, который требует тщательного планирования и профессионального подхода. */}
        </p>
        <p className="text-lg font-semibold pt-6">
          {t("MiningDevelopmentBlock.services")}
          {/* Мы предлагаем комплексные услуги по освоению месторождений твердых полезных ископаемых, начиная от подготовки участка до завершения добычных работ. */}
        </p>
        <p className="text-xl font-semibold">
          {t("MiningDevelopmentBlock.team")}
          {/* Наша команда обеспечивает высокую точность выполнения работ, используя современные технологии и инновационные методы, чтобы гарантировать стабильный результат и минимальное воздействие на окружающую среду. */}
        </p>
        <div className="flex flex-col items-stretch mt-12 text-white">
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("AnalysisAndPlanningBlock.title")}
                {/* Анализ и планирование */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="text-white text-lg flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("AnalysisAndPlanningBlock.geologicalDataAnalysis")}
                  {/* Детальный анализ геологических данных месторождения */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("AnalysisAndPlanningBlock.reservesAssessment")}
                  {/* Оценка объема запасов и рентабельности разработки */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("AnalysisAndPlanningBlock.technicalProject")}
                  {/* Разработка технического проекта и рабочей документации для реализации проекта */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("AnalysisAndPlanningBlock.miningPlan")}
                  {/* Подготовка плана горных работ с учетом особенностей месторождения */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("MiningOrganizationBlock.title")}
                {/* Организация добычных работ */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("MiningOrganizationBlock.modernMethods")}
                  {/* Применение современных методов открытой и подземной добычи */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("MiningOrganizationBlock.equipmentSetup")}
                  {/* Установка и настройка оборудования для максимальной производительности */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("MiningOrganizationBlock.safetyStandards")}
                  {/* Контроль за соблюдением стандартов безопасности и эффективности */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("OptimizationBlock.title")}
                {/* Оптимизация добычи */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("OptimizationBlock.workSequence")}
                  {/* Планирование последовательности работ для оптимального извлечения полезных ископаемых */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("OptimizationBlock.resourceLossMinimization")}
                  {/* Минимизация потерь ресурсов за счет инновационных технологий */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("OptimizationBlock.rawMaterialMonitoring")}
                  {/* Постоянный мониторинг качества добываемого сырья */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("ReclamationBlock.title")}
                {/* Рекультивация и завершение работ */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ReclamationBlock.landReclamation")}
                  {/* Рекультивация земель после завершения добычи */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ReclamationBlock.ecosystemRestoration")}
                  {/* Восстановление экосистемы и минимизация экологического ущерба */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ReclamationBlock.finalReport")}
                  {/* Подготовка полного отчета о завершении работ */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-[500px]">
        <Image
          src="/activity/Field2bg.png"
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
