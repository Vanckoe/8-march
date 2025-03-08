import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Text = () => {
  const t = useTranslations("GeologicalExplorationText");

  return (
    <div className="w-full relative">
      <div className="relative z-10 container px-[30px] md:mb-20 mx-auto">
        <p className="text-3xl md:text-[38px] font-semibold md:leading-[46px]">
          {t("GeologicalExplorationBlockdd.description")}
          {/* Геологоразведочные работы — это основа успешного освоения месторождений твердых полезных ископаемых. */}
        </p>
        <p className="text-lg font-semibold pt-6">
          {t("GeologicalExplorationBlockdd.services")}
          {/* Мы предоставляем полный спектр услуг по геологоразведке, начиная от полевых исследований и заканчивая подготовкой отчетности для получения лицензий на разработку. */}
        </p>
        <p className="text-xl font-semibold">
          {t("GeologicalExplorationBlockdd.team")}
          {/* Наша команда профессионалов обеспечивает высокую точность и эффективность на каждом этапе, соблюдая строгие стандарты экологической и промышленной безопасности. */}
        </p>
        <div className="flex flex-col items-stretch mt-12 text-white">
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("PreparationBlock.title")}
                {/* Подготовка к геологоразведке */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="text-white text-lg flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("PreparationBlock.dataCollection")}
                  {/* Сбор и анализ предварительных данных о районе работ */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("PreparationBlock.planDevelopment")}
                  {/* Разработка плана геологоразведочных мероприятий */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("PreparationBlock.permissions")}
                  {/* Получение всех необходимых разрешений и согласований */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("FieldResearchBlock.title")}
                {/* Полевые исследования */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("FieldResearchBlock.drilling")}
                  {/* Бурение разведочных скважин для взятия образцов пород и минералов */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("FieldResearchBlock.mapping")}
                  {/* Проведение геофизических и геохимических исследований для создания карт месторождения */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("FieldResearchBlock.risksAssessment")}
                  {/* Оценка геологических рисков и условий для дальнейшего освоения. */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("LaboratoryResearchBlock.title")}
                {/* Лабораторные исследования */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("LaboratoryResearchBlock.analysis")}
                  {/* Анализ состава и свойств полезных ископаемых. */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("LaboratoryResearchBlock.characteristics")}
                  {/* Определение физико-химических характеристик пород */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("LaboratoryResearchBlock.testing")}
                  {/* Тестирование на устойчивость и пригодность для добычи */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("ReservesAssessmentBlock.title")}
                {/* Оценка запасов и рентабельности */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ReservesAssessmentBlock.reserveCalculation")}
                  {/* Подсчет и классификация запасов полезных ископаемых */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ReservesAssessmentBlock.economicAssessment")}
                  {/* Экономическая оценка перспективности добычи */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ReservesAssessmentBlock.recommendations")}
                  {/* Подготовка рекомендаций для дальнейшего использования ресурсов */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-[500px]">
        <Image
          src="/activity/geo2bg.png"
          alt="Background"
          /* Background */
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
