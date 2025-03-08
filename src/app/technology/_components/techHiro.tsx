import React from "react";
import Image from "next/image";
import ChinaText from "@/assets/technology/chinatext";
import ZhongjinHeavyIndustry from "@/assets/technology/ZhongjinHeavyIndustry";
import { useTranslations } from "next-intl";

const TechHiro = () => {
  const t = useTranslations("TechnologiesPage");

  return (
    <div className="w-full relative h-[100vh] bg-[#10223c] pb-14 pt-20 flex items-end">
      {/* Фон изображения */}
      <div className="absolute top-0 left-0 w-full h-[100vh]">
        <Image
          src="/technology/techHeroBg.png"
          alt="О компании"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 hidden md:block"
        />
        <Image
          src="/technology/techHeroBgMini.png"
          alt="О компании"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 md:hidden"
        />
      </div>

      {/* Текст поверх изображения */}
      <div className="relative z-10 container mx-auto flex flex-col gap-6 px-[30px] w-full">
        <h1 className="text-white">
          {t("title")}
          {/* Наши технологии */}
        </h1>
        <div className="p-10 bg-[#FFFFFF1A] gap-5 text-white backdrop-blur-md flex flex-col justify-between md:flex-row ">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-[18px] md:text-2xl font-semibold text-center md:text-start">
              {t("partnersSupport")}
              {/* При поддержке партнеров */}
            </p>
            <p className="text-sm md:text-base font-semibold text-center md:text-start">
              {t("description")}
              {/* Передовые технологии для эффективной и устойчивой горнодобычи */}
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/about/ZHInonText.png"
              alt="Описание изображения"
              width={145}
              height={145}
              className="object-cover w-[80px] h-[80px] md:w-[105px] md:h-[105px]"
            />
            <div className="flex flex-col justify-end gap-1 md:gap-0 items-center">
              <ChinaText width="190" />
              <ZhongjinHeavyIndustry width="190" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHiro;
