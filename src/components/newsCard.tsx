"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Right from "@/assets/Right";
import Calendar from "@/assets/Calendar";
import Link from "next/link";
import { useTranslations } from "next-intl";

type NewsCardProps = {
  imageSrc: string;
  date: string;
  title: string;
  onButtonClick?: () => void;
  variant?: "ghost" | "white";
};

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  date,
  title,
  onButtonClick,
  variant = "ghost", // Значение по умолчанию
}) => {
  const t = useTranslations("LatestNewsBlock");

  return (
    <div
      className={clsx(
        "flex flex-col",
        variant === "ghost"
          ? "bg-[#a1a1a1] text-white bg-opacity-20"
          : "bg-[#F3F3F3] text-[#3E3E3E]"
      )}
    >
      <Image
        src={imageSrc}
        alt="service image"
        width={377}
        height={483}
        className="object-cover w-full"
      />
      <div
        className={clsx(
          "pt-8 pb-16 px-5 h-full border-b",
          variant === "white" && "border-[#E0E0E0]"
        )}
      >
        <p
          className={clsx(
            "text-base font-medium flex flex-row items-center gap-3 leading-[22px]",
            variant === "white" && "text-[#3E3E3E] opacity-50"
          )}
        >
          <Calendar color={variant === "white" ? "#3E3E3E" : "white"} />
          {date}
        </p>
        <p
          className={clsx(
            "text-[18px] leading-6 font-bold mt-3",
            variant === "white" && "text-[#3E3E3E]"
          )}
        >
          {title}
        </p>
      </div>
      <div
        className={clsx(
          "w-full h-[1px]",
          variant === "white" ? "bg-[#E0E0E0]" : "bg-white"
        )}
      ></div>
      <Link
        href={"/news"}
        onClick={onButtonClick}
        className={clsx(
          "text-base px-5 hover:bg-[#edf2f7] hover:bg-opacity-20 duration-200 py-6 font-semibold flex flex-row items-center justify-between",
          variant === "white" && "text-[#3E3E3E] hover:bg-opacity-10"
        )}
      >
        {/* Перейти к статье */}
        {t("readArticle")}

        <Right color={variant === "white" ? "#3E3E3E" : "white"} />
      </Link>
    </div>
  );
};

export default NewsCard;
