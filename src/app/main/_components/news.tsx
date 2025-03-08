"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import NewsCard from "@/components/newsCard";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useServerActionQuery } from "@/lib/server-action-hooks";
import { getNewsAction } from "@/app/news/action";
import Spinner from "@/components/spinner";
import { NewsType } from "@/app/data/types";

const News = () => {
  const t = useTranslations("LatestNewsBlock");
  const { data, isPending, error } = useServerActionQuery(getNewsAction, {
    input: undefined,
    queryKey: ["getNews"],
  });

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about/newsBg.png"
          alt="Фон новости"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="mx-auto container px-[30px] w-full flex flex-col gap-6 justify-center py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-white">
            {/* Последние новости */}
            {t("title")}
          </h1>
          <Link href="/media">
            <Button className="hidden md:block">
              {/* Все новости */} {t("allNews")}
            </Button>
          </Link>
        </div>
        <div className="md:mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {isPending && <Spinner />}{" "}
          {/* Показываем спиннер во время загрузки */}
          {error && (
            <div className="text-red-500">Ошибка при загрузке новостей</div>
          )}
          {data &&
            data.map((news: NewsType) => (
              <NewsCard
                key={news.id}
                date={new Date(news.created_at).toLocaleDateString("ru-RU")}
                title={news.title}
                imageSrc={news.preview_image}
              />
            ))}
        </div>
        <Link href="/media">
          <Button className=" md:hidden mt-8 md:mt-0">
            {/* Все новости */}
            {t("allNews")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default News;
