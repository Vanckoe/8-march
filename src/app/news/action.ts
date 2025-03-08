"use server";

import { createServerAction } from "zsa";
import { NewsType } from "../data/types";

export const getNewsAction = createServerAction().handler(async () => {
  const response = await fetch(`${process.env.API_URL}/news/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Произошла ошибка при загрузке новостей");
  }
  const result = (await response.json()) as NewsType[];

  return result;
});
