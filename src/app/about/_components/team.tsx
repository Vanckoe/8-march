"use client";

import React from "react";
import StafCard from "@/components/stafCard";
import { useTranslations } from "next-intl";
import { useServerActionQuery } from "@/lib/server-action-hooks";
import { getEmployeeAction, getGupAction } from "@/app/about/action";
import Spinner from "@/components/spinner";
import { Employees } from "@/app/data/types";

const Team = () => {
  const t = useTranslations("TeamBlock");
  const {
    data: employeeData,
    isPending: isEmployeePending,
    error: employeeError,
  } = useServerActionQuery(getEmployeeAction, {
    input: undefined,
    queryKey: ["getEmployee"],
  });

  const {
    data: gupData,
    isPending: isGupPending,
    error: gupError,
  } = useServerActionQuery(getGupAction, {
    input: undefined,
    queryKey: ["getGup"],
  });

  const savedLanguage = localStorage.getItem("userLocale");

  return (
    <div
      data-nosnippet
      className="relative z-10 container mx-auto px-[30px] flex flex-col gap-11 w-full"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-[#1151AB]">{t("title")}</h1>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[36px] leading-[40px] font-bold">{t("bosses")}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-5">
          {isEmployeePending && <Spinner />}
          {employeeError && (
            <div className="text-red-500">
              Ошибка при загрузке данных о сотрудниках
            </div>
          )}
          {employeeData &&
            employeeData.map((employ: Employees) => {
              const imageSrc = `${"https://kcmg.kz"}${employ.photo}`;
              console.log("Image Source:", imageSrc); // Вывод в консоль
              return (
                <StafCard
                  key={employ.id}
                  imageSrc={imageSrc}
                  name={savedLanguage === "cn" ? employ.name_ch : employ.name}
                  position={
                    savedLanguage === "cn"
                      ? employ.position_ch
                      : employ.position
                  }
                  description={
                    savedLanguage === "cn"
                      ? employ.description_ch
                      : employ.description
                  }
                />
              );
            })}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-[36px] leading-[40px] font-bold">{t("gup")}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-5">
          {isGupPending && <Spinner />}
          {gupError && (
            <div className="text-red-500">
              Ошибка при загрузке данных о сотрудниках
            </div>
          )}
          {gupData &&
            gupData.map((employ: Employees) => {
              const imageSrc = `${"https://kcmg.kz"}${employ.photo}`;
              console.log("Image Source:", imageSrc); // Вывод в консоль
              return (
                <StafCard
                  key={employ.id}
                  imageSrc={imageSrc}
                  name={savedLanguage === "cn" ? employ.name_ch : employ.name}
                  position={
                    savedLanguage === "cn"
                      ? employ.position_ch
                      : employ.position
                  }
                  description={
                    savedLanguage === "cn"
                      ? employ.description_ch
                      : employ.description
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Team;
