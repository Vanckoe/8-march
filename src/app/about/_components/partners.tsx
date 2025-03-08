import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Partners = () => {
  const t = useTranslations("PartnersBlock");
  const locale = useLocale(); // Получение текущей локали

  return (
    <div className="w-full">
      <div className="mx-auto container px-[30px] w-full flex flex-col gap-5">
        <h1 className="text-[#224A87]">
          {t("title")}
          {/* Наши партнеры{" "} */}
        </h1>
        <div className="flex flex-col mt-4 md:flex-row items-stretch gap-5 w-full">
          <div className="bg-[#F3F3F3] w-full flex md:px-6 py-6 items-center justify-center">
            <Image
              src="/about/CC.png"
              alt="Описание изображения"
              width={510}
              height={104}
              className="object-cover md:w-[510px] md:h-[104px]"
            />
          </div>
          <div className="bg-[#F3F3F3] w-full flex px-8 py-6 items-center justify-center">
            <Image
              src="/about/CCB.png"
              alt="Описание изображения"
              width={362}
              height={100}
              className="object-cover md:w-[362px] md:h-[100px]"
            />
          </div>
        </div>
        <div className="bg-[#F3F3F3] flex flex-col justify-center items-center gap-5 p-8 md:p-11">
          <p className="text-2xl md:text-[32px] font-bold text-[#1151AB]">
            {t("subtitle")}
            {/* Нас поддерживают */}
          </p>
          <div className="flex flex-row items-center justify-center flex-wrap gap-7">
            <div className="flex flex-col items-center">
              <Image
                src="/about/ZHI.png"
                alt="Описание изображения"
                width={162}
                height={162}
                className="object-cover w-[90px] h-[90px] md:w-[162px] md:h-[162px]"
              />
              <p className="text-xs text-center font-medium">
                Zhongjin Heavy <br /> Industry
                {/* {t("partners.partner1")} */}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/about/world.png"
                alt="Описание изображения"
                width={162}
                height={162}
                className="object-cover w-[90px] h-[90px] md:w-[162px] md:h-[162px]"
              />
              <p className="text-xs text-center font-medium">
                World Academy <br />
                of Mining Sciences
                {/* {t("partners.partner1")} */}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/about/national.png"
                alt="Описание изображения"
                width={162}
                height={162}
                className="object-cover w-[90px] h-[90px] md:w-[162px] md:h-[162px]"
              />
              <p className="text-xs text-center font-medium">
                {locale === "ru" ? (
                  <>
                    {t("partners.partner2").split(" ")[0]} <br />
                    {t("partners.partner2").split(" ").slice(2).join(" ")}
                  </>
                ) : (
                  t("partners.partner2")
                )}
                {/* Национальная академия <br /> горных наук */}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/about/union.png"
                alt="Описание изображения"
                width={162}
                height={162}
                className="object-cover w-[90px] h-[90px] md:w-[162px] md:h-[162px]"
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
                {/* Горнопромышленный <br /> союз Казахстана */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
