"use client";

import React, { useState, useEffect } from "react";
import Input from "@/components/input";
import Search from "@/assets/Search";
import BigNewsCard from "@/components/bigNewsCard";
import NewsCard from "@/components/newsCard";
import { useTranslations } from "next-intl";
import { useServerActionQuery } from "@/lib/server-action-hooks";
import { getNewsAction } from "@/app/news/action";
import Spinner from "@/components/spinner";
import { NewsType } from "@/app/data/types";

const MediaCenter = () => {
    const t = useTranslations("MediaCenterPage");

  const { data, isPending, error } = useServerActionQuery(getNewsAction, {
    input: undefined,
    queryKey: ["getNews"],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  const newsCardsData: NewsType[] = data || [];

  // Сортируем новости по дате (самые свежие в начале)
  const sortedNews = [...newsCardsData].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  // Фильтрация новостей по запросу
  const filteredNews = sortedNews.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 768 ? 4 : 8);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredNews.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredNews.length / cardsPerPage);

  return (
    <div className="mx-auto container px-[30px] w-full flex flex-col gap-10 justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        <h1 className="text-[#1151AB] w-full">
          {t("title")}
          {/* Медиа-центр */}
        </h1>
        <Input
          containerClassName="md:max-w-[370px]"
          iconLeft={<Search />}
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          placeholder={t("searchPlaceholder")}
          // "Поиск по заголовкам..."
        />
      </div>

      {/* Отображение самой свежей новости */}
      {!searchQuery && sortedNews.length > 0 && (
        <BigNewsCard
          date={new Date(sortedNews[0].created_at).toLocaleDateString("ru-RU")}
          title={sortedNews[0].title}
          imageSrc={sortedNews[0].preview_image}
        />
      )}

      <div className="md:mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {isPending && <Spinner />}
        {error && (
          <div className="text-red-500">Ошибка при загрузке новостей</div>
        )}
        {currentCards.map((news) => (
          <NewsCard
            key={news.id}
            date={new Date(news.created_at).toLocaleDateString("ru-RU")}
            title={news.title}
            imageSrc={news.preview_image}
            variant={"white"}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={` min-h-8 min-w-8 w-8 h-8 flex items-center justify-center border ${
                currentPage === pageIndex + 1
                  ? "bg-[#1151AB] border-[#1151AB] text-white"
                  : "bg-white text-[#1151AB] border border-[#3E3E3E]"
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaCenter;
