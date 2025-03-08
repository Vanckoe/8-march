"use server";

import { createServerAction } from "zsa";
import { Employees } from "../data/types";

export const getEmployeeAction = createServerAction().handler(async () => {
  const response = await fetch(`${process.env.API_URL}/employees/Astana`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Произошла ошибка при загрузке руководоства");
  }
  const result = (await response.json()) as Employees[];

  return result;
});

export const getGupAction = createServerAction().handler(async () => {
  const response = await fetch(`${process.env.API_URL}/employees/Astana_gup`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      "Произошла ошибка при загрузки группы управления проектами"
    );
  }
  const result = (await response.json()) as Employees[];

  return result;
});
