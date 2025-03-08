"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Burger from "@/assets/Burger";
import Logo from "@/assets/Logo";
import Link from "next/link";
import RightTini from "@/assets/RightTini";
import Down from "@/assets/Down";
import { useTranslations } from "next-intl";

type MobileMenuProps = {
  textColorFirstStage: string;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ textColorFirstStage }) => {
  const t = useTranslations("Services"); // Подключаем перевод

  const [isOpen, setIsOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsActivitiesOpen(false);
  };

  const toggleActivities = () => setIsActivitiesOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        className={`border p-2.5 md:hidden ${textColorFirstStage}`}
        onClick={() => setIsOpen(true)}
      >
        <Burger
          color={textColorFirstStage === "text-white" ? "white" : "#3E3E3E"}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#0f2d58] bg-opacity-50 backdrop-blur-sm z-40"
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "1%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-[80%] z-50 bg-white shadow-lg p-9 flex flex-col gap-6"
            >
              <Link href={"/main"} onClick={handleClose}>
                <Logo color="#1151AB" width="99" height="53" />
              </Link>

              <nav className="flex flex-col gap-6 mt-9 text-[#3E3E3E] text-2xl font-semibold">
                <Link
                  href="/about"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("aboutCompany")}
                  {/* О компании */}
                </Link>
                <button
                  className="hover:text-[#1151AB] text-sm flex items-center justify-between"
                  onClick={toggleActivities}
                >
                  {t("activities")}
                  {/* Деятельность */}
                  {isActivitiesOpen ? (
                    <Down width="20" height="20" />
                  ) : (
                    <RightTini width="20" height="20" />
                  )}
                </button>
                <AnimatePresence>
                  {isActivitiesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-4"
                    >
                      <Link
                        href="/activity/analysis"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.explorationAndAnalysis")}
                        {/* Поиск и анализ месторождений */}
                      </Link>
                      <Link
                        href="/activity/geology"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.geologicalSurveys")}
                        {/* Геологические работы */}
                      </Link>
                      <Link
                        href="/activity/field"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.development")}
                        {/* Разработка месторождений */}
                      </Link>
                      <Link
                        href="/activity/construction"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.construction")}
                        {/* Строительство фабрик и объектов */}
                      </Link>
                      <Link
                        href="/activity/document"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.consulting")}
                        {/* Консалтинг */}
                      </Link>
                      <Link
                        href="/activity/mining"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.research")}
                        {/* Научно-исследовательские работы */}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Link
                  href="/technology"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("sustainableDevelopment")}
                  {/* Технологии */}
                </Link>
                <Link
                  href="/media"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("mediaCenter")}
                  {/* Медиа-центр */}
                </Link>
                <Link
                  href="/contacts"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("contacts")}
                  {/* Контакты */}
                </Link>
              </nav>

              <div className="mt-6">
                <p className="text-sm font-bold text-[#CACACA] mb-1">
                  {t("phoneNumber")}
                  {/* НОМЕР ТЕЛЕФОНА */}
                </p>
                <p className="text-xl font-semibold text-[#3E3E3E]">
                  +7 (XXX) XXX - XX - XX
                </p>
                <p className="text-sm font-bold text-[#CACACA] mb-1 mt-4">
                  {t("email")}
                  {/* ЭЛЕКТРОННАЯ ПОЧТА */}
                </p>
                <p className="text-xl font-semibold text-[#3E3E3E]">
                  info@kcmg.kz
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
