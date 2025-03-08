import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Text = () => {
  const t = useTranslations("ConsultingBlockText");

  return (
    <div className="w-full relative ">
      <div className="relative z-10 container px-[30px] md:mb-32 mx-auto">
        <p className="text-3xl md:text-[38px] font-semibold md:leading-[46px]">
          {t("ConsultingBlock.description")}
          {/* Мы оказываем консультационные услуги по любому виду деятельности в области геологии и недропользования.  */}
        </p>
        <p className="text-lg font-semibold pt-6">
          {t("ConsultingBlock.services")}
          {/* Мы предоставляем комплексные услуги по подготовке, оформлению и сопровождению документации, необходимых для начала и успешного ведения деятельности.и */}
        </p>

        <div className="flex flex-col items-stretch mt-12 text-white">
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("RegulatoryAnalysisBlock.title")}
                {/* Анализ нормативных требований */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="text-white text-lg flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("RegulatoryAnalysisBlock.legislationStudy")}
                  {/* Изучение местного и международного законодательства */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("RegulatoryAnalysisBlock.compliancePlan")}
                  {/* Подготовка плана по соблюдению всех необходимых норм и требований */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("ProjectDocumentationBlock.title")}
                {/* Разработка проектной документации */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ProjectDocumentationBlock.technicalReports")}
                  {/* Подготовка технических отчетов и планов */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("ProjectDocumentationBlock.licensesDocumentation")}
                  {/* Создание документации для получения лицензий и разрешений на
                  разработку месторождений */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("EnvironmentalSupportBlock.title")}
                {/* Экологическое сопровождение */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("EnvironmentalSupportBlock.environmentalReports")}
                  {/* Подготовка отчетов об оценке воздействия на окружающую среду
                  (ОВОС) */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("EnvironmentalSupportBlock.environmentalCoordination")}
                  {/* Согласование природоохранных мероприятий с соответствующими
                  органами */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#2E6BC1] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("AdministrativeSupportBlock.title")}
                {/* Административное сопровождение */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("AdministrativeSupportBlock.applicationsAndLicenses")}
                  {/* Оформление заявлений и получение лицензий, сертификатов и
                  разрешений */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("AdministrativeSupportBlock.governmentInteraction")}
                  {/* Взаимодействие с государственными и надзорными органами */}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-[#1151AB] flex-col md:flex-row items-stretch">
            <div className="md:w-[50%] px-5 py-7 md:p-9">
              <p className="text-[28px] font-semibold">
                {t("DocumentationMonitoringBlock.title")}
                {/* Мониторинг и обновление документации */}
              </p>
            </div>
            <div className="md:w-[50%] px-5 py-7 md:p-9 text-base border-t md:border-l border-white border-opacity-30 font-medium">
              <ul className="flex flex-col gap-4 pl-5">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("DocumentationMonitoringBlock.legislationChanges")}
                  {/* Постоянный контроль за изменениями в законодательстве */}
                </li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-white">
                  {t("DocumentationMonitoringBlock.documentationUpdates")}
                  {/* Обновление документов в соответствии с новыми требованиями */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block bottom-0 left-0 w-full h-[500px]">
        <Image
          src="/activity/Document2bg.png"
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
