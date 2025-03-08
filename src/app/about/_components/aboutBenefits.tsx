import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutBenefits = () => {
  const t = useTranslations("AdvantagesBlock");

  return (
    <div className="w-full relative  pt-20">
      {/* Фон изображения */}
      <div className="absolute top-0 left-0 w-full h-[740px] md:h-[650px]">
        <Image
          src="/matrch/dog.webp"
          alt="Железнодорожные пути"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 hidden md:block"
        />
        <Image
          src="/matrch/dog.webp"
          alt="Железнодорожные пути"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 md:hidden"
        />
      </div>

      {/* Текст поверх изображения */}
      <div className="relative z-10 container mx-auto px-[30px] pt-[600px] md:pt-[480px] w-full flex flex-col md:flex-row">
        <div className="bg-[#1D4178] w-full text-white py-10 px-6">
          <p className="text-2xl hidden md:block font-semibold mb-4">
            {t("considerNeeds")}
            {/* Учитываем потребности */}
          </p>
          <p className="text-base font-semibold opacity-90">
            {/* Мы разрабатываем решения, полностью соответствующие задачам и
            ожиданиям наших партнеров */}
            {t("considerNeedsDesc")}
          </p>
        </div>
        <div className="bg-[#2E6BC1] w-full text-white py-10 px-6">
          <p className="text-2xl font-semibold mb-4">
            {t("technologicalLeadership")}
            {/* Технологическое лидерство{" "} */}
          </p>
          <p className="text-base font-semibold opacity-90">
            {/* Используем самые современные методы и инновационные подходы для
            повышения эффективности */}
            {t("technologicalLeadershipDesc")}
          </p>
        </div>
        <div className="bg-[#1D4178] w-full text-white py-10 px-6">
          <p className="text-2xl font-semibold mb-4">
            {t("transparency")}
            {/* Прозрачность */}
          </p>
          <p className="text-base font-semibold opacity-90">
            {/* Все наши процессы открыты для партнеров, что позволяет
            контролировать качество на каждом этапе */}
            {t("transparencyDesc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBenefits;
