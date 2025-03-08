import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Zero = () => {
  const t = useTranslations("ConsultingBlockText");

  return (
    <div className="w-full relative h-[60vh] pb-14 pt-20 flex items-end">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/activity/DocumentHero.png"
          alt="О компании"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="z-0 hidden md:block"
        />
        <Image
          src="/activity/AnalHeroMini.png"
          alt="О компании"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="z-0 md:hidden"
        />
      </div>

      <div className="relative z-10 container mx-auto px-[30px] w-full">
        <h1 className="text-white">
          {/* ДКонсалтинг */}
          {t("ConsultingBlock.title")}
        </h1>
      </div>
    </div>
  );
};

export default Zero;
