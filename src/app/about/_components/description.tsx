import React from "react";
import Logo from "@/assets/Logo";
import { useTranslations } from "next-intl";

const Description = () => {
  const t = useTranslations("AboutCompanyPage");

  return (
    <div className="w-full">
      <div className="mx-auto container px-[30px] w-full flex flex-col md:flex-row gap-[100px]">
        <div className="flex flex-col w-full">
          <h1 className=" text-[#224A87]">
            Kazakhstan China <br /> Mining Group
          </h1>
          <p className="text-[18px] font-semibold mt-8">
            {/* Мы – горнодобывающая компания нового поколения, специализирующаяся
            на предоставлении полного спектра услуг для разработки
            месторождений. Наша цель – не просто добыча полезных ископаемых, но
            создание устойчивых и высокоэффективных решений для промышленности,
            соответствующих международным стандартам качества и экологической
            безопасности. */}
            {t("description")}
          </p>
          <p className="text-[18px] font-semibold mt-5">
            {/* Мы помогаем запускать горнодобывающие проекты «с нуля», сопровождая
            их на всех этапах – от геологоразведки до строительства
            производственных объектов и ввода их в эксплуатацию. */}
            {t("decpPast")}
          </p>
        </div>
        <div className="flex items-center justify-center bg-[#1151AB] py-[130px] px-[92px] md:min-w-[40%]">
          <Logo width="291" height="160" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Description;
