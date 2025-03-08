"use client";
import React from "react";
import Image from "next/image";
import Right from "@/assets/Right";
import Calendar from "@/assets/Calendar";
import Link from "next/link";
import { useTranslations } from "next-intl";

type BigNewsCardProps = {
  imageSrc: string;
  date: string;
  title: string;
  onButtonClick?: () => void;
};

const BigNewsCard: React.FC<BigNewsCardProps> = ({
  imageSrc,
  date,
  title,
  onButtonClick,
}) => {
  const t = useTranslations("MediaCenterPage");

  return (
    <div className="flex flex-col bg-[#1151AB] text-white">
      <div className="relative w-full h-[300px] md:h-[483px]">
        <Image
          src={imageSrc}
          alt="service image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="pt-8 pb-6 px-5 h-full ">
        <p className="text-base font-medium flex flex-row items-center gap-3 leading-[22px]">
          <Calendar />
          {date}
        </p>
        <p className="text-xl md:text-2xl leading-6 font-bold mt-3">{title}</p>
      </div>
      <Link
        href={"/news"}
        onClick={onButtonClick}
        className="text-base px-5 hover:bg-[#edf2f7] border-opacity-50 border-t border-white hover:bg-opacity-20 duration-200 py-6 font-semibold flex flex-row items-center gap-[30px]"
      >
        {t("readArticle")}
        {/* Перейти к статье */}
        <Right color="white" />
      </Link>
    </div>
  );
};

export default BigNewsCard;
