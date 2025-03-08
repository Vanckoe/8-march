import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Title = () => {
  const t = useTranslations("AboutCompanyPage");

  return (
    <div className="w-full relative bg-[#10223c] h-[70vh] pb-14 pt-24 flex items-end">
      {/* Фон изображения */}
      <div className="absolute top-0 left-0 w-full h-[70vh]">
        <Image
          src="/matrch/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg"
          alt="О компании"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 hidden md:block"
        />
        <Image
          src="/matrch/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg"
          alt="О компании"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 md:hidden"
        />
      </div>

      {/* Текст поверх изображения */}
      <div className="relative z-10 container mx-auto px-[30px] w-full">
        <p className="md:text-white text-[#3E3E3E] text-[40px] md:text-[80px] font-semibold">
          {/* О компании */}
          {t("title")}
        </p>
      </div>
    </div>
  );
};

export default Title;
