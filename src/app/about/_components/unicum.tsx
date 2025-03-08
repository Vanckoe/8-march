import React from "react";
import Image from "next/image";
import CalendarEmpty from "@/assets/benefits/CalendarEmpty";
import Reload from "@/assets/benefits/reload";
import Tools from "@/assets/benefits/tools";
import UserSmile from "@/assets/benefits/user-smile";
import { useTranslations } from "next-intl";

const Unicum = () => {
  const t = useTranslations("UniqueBlock");

  return (
    <div className="w-full relative  pt-20">
      {/* Фон изображения */}
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-[800px]">
        <Image
          src="/about/peshera.png"
          alt="пещера"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Текст поверх изображения */}
      <div className="relative z-10 container mx-auto px-[30px] pt-[150px] md:pt-[400px] w-full flex flex-col gap-10">
        <h1 className=" text-white">
          {t("title")}
          {/* Что делает нас уникальными? */}
        </h1>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="bg-[#1D4178] w-full text-white py-8 px-6">
            <UserSmile />
            <p className="text-2xl font-semibold mt-12 mb-4">
              {t("individualApproach")}
              {/* Индивидуальный подход */}
            </p>
            <p className="text-sm font-semibold opacity-60">
              {/* Каждому проекту мы уделяем максимум внимания, разрабатывая
              решения, которые идеально соответствуют вашим задачам */}
              {t("individualApproachDesc")}
            </p>
          </div>
          <div className="bg-[#163666] w-full text-white py-8 px-6">
            <Reload />{" "}
            <p className="text-2xl font-semibold mt-12 mb-4">
              {t("fullCycle")}
              {/* Полный цикл услуг{" "} */}
            </p>
            <p className="text-sm font-semibold opacity-60">
              {/* Мы обеспечиваем разработку месторождений от концепции до готового
              объекта, объединяя геологию, проектирование, строительство и
              сопровождение */}
              {t("fullCycleDesc")}
            </p>
          </div>
          <div className="bg-[#1D4178] w-full text-white py-8 px-6">
            <Tools />{" "}
            <p className="text-2xl font-semibold mt-12 mb-4">
              {t("experiencedSpecialists")}
              {/* Опытные специалисты{" "} */}
            </p>
            <p className="text-sm font-semibold opacity-60">
              {/* Команда профессионалов с глубоким знанием отрасли и многолетним
              опытом */}
              {t("experiencedSpecialistsDesc")}
            </p>
          </div>
          <div className="bg-[#163666] w-full text-white py-8 px-6">
            <CalendarEmpty />{" "}
            <p className="text-2xl font-semibold mt-12 mb-4">
              {t("longTermPartnership")}
              {/* Долгосрочное партнёрство{" "} */}
            </p>
            <p className="text-sm font-semibold opacity-60">
              {/* Мы нацелены на создание долгосрочных отношений, основанных на
              доверии и результатах */}
              {t("longTermPartnershipDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unicum;
