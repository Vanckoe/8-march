import React from "react";
import Image from "next/image";
// import { useTranslations } from "next-intl";

const Benefits = () => {
  // const t = useTranslations("Advantages");

  return (
    <div className="w-full relative  pt-20">
      {/* Фон изображения */}
      <div className="absolute top-0 left-0 w-full h-[450px] md:h-[650px]">
        <Image
          src="/matrch/buketik.jpg"
          alt="Железнодорожные пути"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="z-0"
        />
      </div>

      <div className="relative z-10 container mx-auto px-[30px] pt-[300px] md:pt-[500px] w-full flex flex-col md:flex-row">
        <div className="bg-[#1D4178] w-full h-[300px] text-white py-8 px-6 mb-4 md:mb-0 relative">
          <Image
            src="/matrch/mems/images.jpeg"
            alt="Железнодорожные пути"
            layout="fill" // Растягиваем изображение на весь контейнер
            objectFit="stretch" // Растягиваем изображение по всему контейнеру
            quality={100}
          />
        </div>
        <div className="bg-[#163666] w-full h-[300px] text-white py-8 px-6 mb-4 md:mb-0 relative">
          <Image
            src="/matrch/mems/973da2239669ef408fd1eaa51c5b4d8a.webp"
            alt="Железнодорожные пути"
            layout="fill" // Растягиваем изображение на весь контейнер
            objectFit="stretch" // Растягиваем изображение по всему контейнеру
            quality={100}
          />
        </div>
        <div className="bg-[#1D4178] w-full h-[300px] text-white py-8 px-6 mb-4 md:mb-0 relative">
          <Image
            src="/matrch/mems/tropican.jpg"
            alt="Железнодорожные пути"
            layout="fill" // Растягиваем изображение на весь контейнер
            objectFit="stretch" // Растягиваем изображение по всему контейнеру
            quality={100}
          />
        </div>
        <div className="bg-[#163666] w-full h-[300px] text-white py-8 px-6 relative">
          <Image
            src="/matrch/mems/woman.png"
            alt="Железнодорожные пути"
            layout="fill" // Растягиваем изображение на весь контейнер
            objectFit="stretch" // Растягиваем изображение по всему контейнеру
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
