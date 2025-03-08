import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("Advantages");

  return (
    <div className="w-full relative  pt-20">
      {/* Фон изображения */}
      <div className="absolute top-0 left-0 w-full h-[450px] md:h-[650px]">
        <Image
          src="/about/railroad-tracks.png"
          alt="Железнодорожные пути"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Текст поверх изображения */}
      <div className="relative z-10 container mx-auto px-[30px] pt-[300px] md:pt-[500px] w-full flex flex-col md:flex-row">
        <div className="bg-[#1D4178] w-full text-white py-8 px-6">
          <h2 className="text-2xl font-medium">01</h2>
          <p className="text-2xl font-semibold mt-12 mb-4">
            {/* Эксклюзивный подход */}
            {t("exclusiveApproach")}
          </p>
          <p className="text-sm font-semibold opacity-60">
            {/* Мы предоставляем услуги «под ключ», охватывая все этапы – от анализа
            до запуска готового объекта */}
            {t("exclusiveApproachDesc")}
          </p>
        </div>
        <div className="bg-[#163666] w-full text-white py-8 px-6">
          <h2 className="text-2xl font-medium">02</h2>
          <p className="text-2xl font-semibold mt-12 mb-4">
            {/* Разветвленная структура{" "} */}
            {t("distributedStructure")}
          </p>
          <p className="text-sm font-semibold opacity-60">
            {/* Мы предоставляем услуги «под ключ», охватывая все этапы – от анализа
            до запуска готового объекта */}
            {t("distributedStructureDesc")}
          </p>
        </div>
        <div className="bg-[#1D4178] w-full text-white py-8 px-6">
          <h2 className="text-2xl font-medium">03</h2>
          <p className="text-2xl font-semibold mt-12 mb-4">
            {/* Наблюдательный совет{" "} */}
            {t("supervisoryBoard")}
          </p>
          <p className="text-sm font-semibold opacity-60">
            {/* Мы предоставляем услуги «под ключ», охватывая все этапы – от анализа
            до запуска готового объекта */}
            {t("supervisoryBoardDesc")}
          </p>
        </div>
        <div className="bg-[#163666] w-full text-white py-8 px-6">
          <h2 className="text-2xl font-medium">04</h2>
          <p className="text-2xl font-semibold mt-12 mb-4">
            {/* Технологии и опыт{" "} */}
            {t("technologyAndExperience")}
          </p>
          <p className="text-sm font-semibold opacity-60">
            {/* Мы предоставляем услуги «под ключ», охватывая все этапы – от анализа
            до запуска готового объекта */}
            {t("technologyAndExperienceDesc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
