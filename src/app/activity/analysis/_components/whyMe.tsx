import React from "react";
import Ecology from "@/assets/Ecology";
import Settings from "@/assets/settings";
import Users from "@/assets/users";
import Light from "@/assets/light";
import { useTranslations } from "next-intl";

const WhyMe = () => {
  const t = useTranslations("WhyUsBlock");

  return (
    <div className="relative z-10 container mx-auto px-[30px] w-full gap-5 flex flex-col">
      <h1 className="text-[#1151AB]">
        {t("title")}
        {/* Почему выбирают нас? */}
      </h1>
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        <div className="flex flex-col md:w-1/2 bg-[#F7F7F7] px-8 py-10">
          <Light />
          <p className="text-2xl font-semibold mt-6">
            {t("accurateApproach")}
            {/* Точный и комплексный подход */}
          </p>
          <p className="text-base font-semibold mt-[10px] mb-5">
            {t("technologicalAdvantage")}
            {/* Мы применяем новейшие методы и инструменты для анализа месторождений */}
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 bg-[#F7F7F7] px-8 py-10">
          <Settings />
          <p className="text-2xl font-semibold mt-6">
            {t("advancedTechnologies")}
            {/* Передовые технологии */}
          </p>
          <p className="text-base font-semibold mt-[10px] mb-5">
            {/* Мы используем современные геофизические и геологические технологии,
            проверенные в международной практике{" "} */}
            {t("modernTechnologies")}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        <div className="flex flex-col md:w-1/2 bg-[#F7F7F7] px-8 py-10">
          <Ecology />
          <p className="text-2xl font-semibold mt-6">
            {t("ecologicalResponsibility")}
            {/* Экологическая ответственность{" "} */}
          </p>
          <p className="text-base font-semibold mt-[10px] mb-5">
            {/* Весь процесс исследования соответствует экологическим стандартам,
            что минимизирует воздействие на природу{" "} */}
            {t("processCompliance")}
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 bg-[#F7F7F7] px-8 py-10">
          <Users />
          <p className="text-2xl font-semibold mt-6">
            {t("professionalism")}
            {/* Профессионализм и опыт  */}
          </p>
          <p className="text-base font-semibold mt-[10px] mb-5">
            {/* Наша команда состоит из опытных геологов и инженеров, готовых
            выполнить работы на высшем уровне{" "} */}
            {t("experiencedTeam")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
