"use client";
import React, { useState, useRef } from "react";
import Button from "@/components/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutHero = () => {
  const t = useTranslations("Main");
  const [isMuted, setIsMuted] = useState(true); // Изначально звук включен
  const videoRef = useRef<HTMLVideoElement>(null); // Ссылка на видео

  // Функция для переключения звука
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Переключаем состояние muted
      setIsMuted(!isMuted); // Обновляем состояние
    }
  };

  return (
    <div
      className="w-full flex flex-col relative min-h-[900px] md:min-h-screen h-[100vh] pt-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #ffc3a0  0%, #ffafbd 100%)",
      }}
    >
      {/* Видео, которое будет фоном */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted={isMuted}
      >
        <source
          src="/matrch/dvachannel_rand2ch_ru2ch_ban.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>

      <div className="mx-auto z-30 container h-[100vh] justify-between items-stretch px-[30px] w-full pt-9 flex flex-col md:justify-between">
        <div className="flex flex-col md:flex-row ">
          <p className="text-5xl text-[#003277] md:w-3/5 md:text-[72px] leading-[48px] md:leading-[72px] font-semibold">
            C 8 марта / <br /> 8 Наурызыңызбен {/* {t('subtitle')} */}
          </p>
          <div className="pt-5 z-30 md:w-2/5 flex flex-col gap-7">
            <p className="text-base md:text-xl font-semibold">
              {/* Горнодобывающая компания,
            <br /> специализирующаяся на поддержке
            <br />
            запуска и развития промышленной
            <br /> деятельности предприятий */}
              {t("subtitle")}
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <Link
                href={
                  "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C"
                }
              >
                <Button className="hover:text-[#2E6BC1]">
                  {t("learnMore")}
                </Button>
              </Link>
              <Button
                className="hover:text-[#2E6BC1]"
                onClick={toggleMute} // Добавляем обработчик на клик
              >
                {isMuted ? t("soundOff") : t("soundOn")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
