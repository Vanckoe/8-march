"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/assets/Logo";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";
// import ActivityMenu from "./activityMenu";
import { usePathname } from "next/navigation";

const HeaderMain = () => {
  const t = useTranslations("Navigation");

  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Маршруты с белым текстом и логотипом
  const whiteTextRoutes = [
    "/about",
    "/technology",
    "/activity/analysis",
    "/activity/geology",
    "/activity/field",
    "/activity/construction",
    "/activity/document",
    "/activity/mining",
  ];

  // Проверяем, нужно ли использовать белый текст (только для начального экрана)
  const isOnWhiteTextRoute = whiteTextRoutes.includes(pathname);
  const useWhiteText = !isScrolled && isOnWhiteTextRoute;

  // Логика цветов
  const textColor = isScrolled
    ? "text-[#3E3E3E]"
    : useWhiteText
    ? "text-white"
    : "text-[#3E3E3E]";
  const logoColor = isScrolled
    ? "#1151AB"
    : useWhiteText
    ? "#FFFFFF"
    : "#1151AB";

  const getLinkClassName = (route: string) => {
    const isActive = pathname === route;
    return `${textColor} ${isActive ? "font-extrabold" : "font-semibold"}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-0 bg-white z-50 shadow-md"
          : "absolute top-0 left-0 z-50 bg-transparent"
      } w-full transition-all duration-300`}
    >
      <div className="mx-auto container relative px-[30px]">
        <header
          className={`flex flex-row items-center w-full gap-5 justify-between`}
        >
          <Link href={"/main"} className="flex flex-row items-center gap-2">
            <Logo width="80" color={logoColor} />
          </Link>
          <div className="hidden md:flex flex-row items-center gap-10">
            <Link
              href={"/main"}
              className={`text-sm  ${getLinkClassName("/main")}`}
            >
              {t("technologies")}
            </Link>
            <Link
              href={"/about"}
              className={`text-sm  ${getLinkClassName("/about")}`}
            >
              {/* О компании */}
              {t("aboutCompany")}
            </Link>
            {/* <ActivityMenu
              textTitle={t("activity")}
              isScrolled={isScrolled}
              textColorFirstStage={textColor}
              logoColor={logoColor}
            /> */}

            {/* <Link
              href={"/media"}
              className={`text-sm  ${getLinkClassName("/media")}`}
            >
              {t("mediaCenter")}
              Медиа-центр
            </Link> */}
            <Link
              href={"/contacts"}
              className={`text-sm  ${getLinkClassName("/contacts")}`}
            >
              {t("contacts")}
              {/* Контакты */}
            </Link>
          </div>
          <LanguageSwitcher textColorFirstStage={textColor} />
        </header>
      </div>
      {isScrolled && <div className="w-full h-[1px] bg-gray-200"></div>}
    </div>
  );
};

export default HeaderMain;
