import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutHero = () => {
  const t = useTranslations("Main");

  return (
    <div
      className="w-full flex flex-col relative  min-h-[900px] md:min-h-screen h-[100vh] pt-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #ffc3a0  0%, #ffafbd 100%)",
      }}
    >
      <div className="mx-auto z-30 container h-[100vh] justify-between items-stretch px-[30px] w-full pt-9 flex flex-col md:justify-between">
        <div className="flex flex-col md:flex-row ">
          <p className="text-5xl text-[#003277] md:w-3/5 md:text-[72px] leading-[48px] md:leading-[72px] font-semibold">
            C 8 марта
            {/* {t('subtitle')} */}
          </p>
          <div className="pt-5 z-30 md:w-2/5 flex flex-col gap-7">
            <p className="text-base md:text-xl font-semibold">
              {/* Горнодобывающая компания,
            <br /> специализирующаяся на поддержке
            <br />
            запуска и развития промышленной
            <br /> деятельности предприятий */}
              {t("subtitle")}
            </p>
            <Link href={"/about"}>
              <Button className="hover:text-[#2E6BC1]">{t("learnMore")}</Button>
            </Link>
          </div>
        </div>
        <Image
          src="/matrch/pngegg (1).png"
          alt="pngegg"
          width={500}
          height={300}
          objectFit="contain"
          className=" h-full mt-auto pt-28 md:pt-0 hidden md:block transform scale-x-[-1]"
          quality={100}
        />
        <Image
          src="/matrch/pngegg.png"
          alt="pngegg"
          width={500}
          height={300}
          objectFit="contain"
          className="block md:hidden h-full -mb-9 pt-28 md:pt-0 transform"
          quality={100}
        />
      </div>
      {/* <div className=" w-full z-20 h-[100vh] hidden md:block">
        <Image
          src="/about/aboutTruck.png"
          alt="грузовик"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="z-20"
          objectPosition="bottom"
        />
      </div>
      <div className="relative w-full min-h-[450px] h-full z-10 md:hidden">
        <Image
          src="/matrch/mainTitleMini.webp"
          alt=" грузовик"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-20 w-full"
          objectPosition="bottom"
        />
      </div> */}
    </div>
  );
};

export default AboutHero;
