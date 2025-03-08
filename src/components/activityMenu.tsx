"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import RightArr from "@/assets/RightArr";
import { useTranslations } from "next-intl";

type ActivityMenuProps = {
  isScrolled: boolean;
  textColorFirstStage: string;
  textTitle: string;
  logoColor: string;
};

const ActivityMenu: React.FC<ActivityMenuProps> = ({
  isScrolled,
  textTitle,
  logoColor,
  textColorFirstStage,
}) => {
  const t = useTranslations("ActivitiesBlock");

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`text-sm font-semibold flex flex-row items-center gap-1 ${
          isScrolled ? "text-[#3E3E3E]" : textColorFirstStage
        }`}
      >
        {textTitle}
        <motion.div
          animate={{
            rotate: isHovered ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <RightArr color={logoColor} />
        </motion.div>
      </button>

      {/* Выпадающее меню */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-[600px] bg-white shadow-lg mt-2 py-10 px-8 grid grid-cols-2 gap-4"
          >
            <Link
              href="/activity/analysis"
              className="text-sm font-semibold hover:text-[#1151AB]"
            >
              {/* Поиск и анализ месторождений */}
              {t("explorationAndAnalysis")}
            </Link>
            <Link
              href="/activity/geology"
              className="text-sm font-semibold hover:text-[#1151AB]"
            >
              {t("geologicalWorks")}
              {/* Геологические работы */}
            </Link>
            <Link
              href="/activity/construction"
              className="text-sm font-semibold hover:text-[#1151AB]"
            >
              {t("construction")}
              {/* Строительство фабрик и объектов */}
            </Link>
            <Link
              href="/activity/field"
              className="text-sm font-semibold hover:text-[#1151AB]"
            >
              {t("development")}
              {/* Разработка месторождений */}
            </Link>
            <Link
              href="/activity/document"
              className="text-sm font-semibold hover:text-[#1151AB]"
            >
              {t("documentationSupport")}
              {/* Документальное сопровождение */}
            </Link>
            <Link
              href="/activity/mining"
              className="text-sm font-semibold hover:text-[#1151AB]"
            >
              {t("mineralExtraction")}
              {/* Добыча ископаемых */}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActivityMenu;
