"use client";
import React, { useState } from "react";
import Image from "next/image";
import Right from "@/assets/Right";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ServicesCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  onButtonClick?: () => void;
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  imageSrc,
  title,
  description,
  link,
  onButtonClick,
}) => {
  const t = useTranslations("Services");

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <Image
        src={imageSrc}
        alt="service image"
        width={377}
        height={368}
        className="object-cover max-h-[368px] w-full"
      />
      <div className="pt-8 pb-12 pl-5 pr-5 md:pr-10 h-full border-b">
        <p className="text-[32px] font-semibold leading-[32px] break-words">
          {title}
        </p>
        <p className="text-base font-semibold mt-3">{description}</p>
      </div>
      <div className="w-full h-[1px] bg-[#224A87] opacity-20"></div>

      <Link
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onButtonClick}
        className="text-base px-5 hover:text-white active:bg-[#3074D4] active:text-white hover:bg-[#1151AB] transition-colors duration-300 py-6 font-semibold text-[#224A87] flex flex-row items-center justify-between"
      >
        {/* Подробнее */}
        {t("learnMore")}
        <Right color={isHovered ? "white" : "#1151AB"} />{" "}
      </Link>
    </div>
  );
};

export default ServicesCard;
