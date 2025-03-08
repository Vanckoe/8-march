import React from "react";
import Image from "next/image";
import Leaf from "@/assets/Leaf";
import { useTranslations, useLocale } from "next-intl";

const WhoWeAre = () => {
  const t = useTranslations("AboutUs");
  const locale = useLocale(); // Получение текущей локали

  return (
    <div className="w-full">
      <div className="mx-auto container px-[30px] w-full flex flex-col md:flex-row gap-[50px] md:gap-[100px]">
        <div className="flex flex-col w-full">
          <h1 className=" text-[#224A87]">{t("title")}</h1>
          <p className="text-[18px] font-semibold mt-8">{t("description")}</p>
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-[#D9D9D9] bg-opacity-20 flex flex-col items-center gap-5 px-5 py-10 md:pt-14 md:pb-10">
            <p className="text-2xl text-[#1151AB] font-bold">{t("subtitle")}</p>
            <div className="grid grid-cols-2 items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/about/world.png"
                  alt="Описание изображения"
                  width={104}
                  height={104}
                  className="object-cover md:w-[90px] md:h-[90px]"
                />
                <p className="text-xs text-center font-medium">
                  World Academy <br /> of Mining Sciences
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/about/national.png"
                  alt="Описание изображения"
                  width={104}
                  height={104}
                  className="object-cover md:w-[90px] md:h-[90px]"
                />
                <p className="text-xs text-center font-medium">
                  {/* {t("partners.partner2")} */}
                  {locale === "ru" ? (
                    <>
                      {t("partners.partner2").split(" ")[0]} <br />
                      {t("partners.partner2").split(" ").slice(2).join(" ")}
                    </>
                  ) : (
                    t("partners.partner2")
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/about/union.png"
                  alt="Описание изображения"
                  width={104}
                  height={104}
                  className="object-cover md:w-[90px] md:h-[90px]"
                />
                <p className="text-xs text-center font-medium">
                  {locale === "ru" ? (
                    <>
                      {t("partners.partner3").split(" ")[0]} <br />
                      {t("partners.partner3").split(" ").slice(1).join(" ")}
                    </>
                  ) : (
                    t("partners.partner3")
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/about/ZHI.png"
                  alt="Описание изображения"
                  width={104}
                  height={104}
                  className="object-cover md:w-[90px] md:h-[90px]"
                />
                <p className="text-xs text-center font-medium">
                  Zhongjin Heavy <br /> Industry
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-center py-6 px-10 md:px-6 bg-[#1D4178] md:gap-[30px]">
            <div className="flex flex-row items-center gap-4">
              <div className="w-[42px] h-[42px] flex-shrink-0">
                <Leaf />
              </div>{" "}
              <p className=" text-[56px] font-semibold text-white">100%</p>
            </div>
            <p className="text-sm font-semibold text-white">{t("standards")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
