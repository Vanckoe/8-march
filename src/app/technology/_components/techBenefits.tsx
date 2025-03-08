import React from "react";
import ChinaText from "@/assets/technology/chinatext";
import ZhongjinHeavyIndustry from "@/assets/technology/ZhongjinHeavyIndustry";
import { useTranslations } from "next-intl";

const TechBenefits = () => {
  const t = useTranslations("TechnologiesAdvantagesBlock");

  return (
    <div className="relative z-10 container mx-auto px-[30px] flex flex-col gap-5 w-full">
      <h1 className="text-[#1151AB] mb-5">
        {t("title")}
        {/* Преимущества наших технологий */}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-stretch">
        <div className="p-5 flex flex-col gap-20 bg-[#F7F7F7] w-full">
          <p className="text-base font-semibold">01</p>
          <p className="text-base font-semibold">
            {/* Повышение эффективности производства благодаря инновационным
            материалам */}
            {t("advantage1")}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-20 bg-[#F7F7F7] w-full">
          <p className="text-base font-semibold">02</p>
          <p className="text-base font-semibold">
            {/* Минимизация воздействия на окружающую среду благодаря экологичным
            технологиям */}
            {t("advantage2")}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-20 bg-[#F7F7F7] w-full">
          <p className="text-base font-semibold">03</p>
          <p className="text-base font-semibold">
            {/* Снижение затрат на обслуживание оборудования за счет долговечных
            решений */}
            {t("advantage3")}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-20 bg-[#F7F7F7] w-full">
          <p className="text-base font-semibold">04</p>
          <p className="text-base font-semibold">
            {t("advantage4")}
            {/* Высокая адаптивность решений для разных условий эксплуатации */}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 p-8 bg-[#F7F7F7]">
        <div className="flex flex-col">
          <ChinaText color="#1151AB" width="192" />
          <ZhongjinHeavyIndustry color="#1151AB" width="192" />
        </div>
        <p className="font-bold text-xl">
          {t("partnershipTitle")}
          {/* Партнерство с <br /> Zhongjin Heavy Industry */}
        </p>
        <p className="md:w-1/2 text-base font-semibold">
          {/* Мы тесно сотрудничаем с Zhongjin Heavy Industry, которые предоставляют
          нам лучшие технологии и оборудование, проверенные в международной
          практике. Совместно мы развиваем инновационные решения, чтобы улучшить
          процессы добычи, переработки и транспортировки полезных ископаемых. */}
          {t("partnershipDescription1")}
        </p>
      </div>
    </div>
  );
};

export default TechBenefits;
