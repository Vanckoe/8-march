"use client";
import React, { useState } from "react";
import Paper from "@/assets/Paper";
import X from "@/assets/X";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

type StafCardProps = {
  imageSrc: string;
  name: string;
  position: string;
  altText?: string;
  description?: string; // Дополнительное поле для описания
};

const StafCard: React.FC<StafCardProps> = ({
  imageSrc,
  name,
  position,
  altText = "Team member",
  description = "Здесь будет подробная информация о сотруднике.",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative flex flex-col">
        <img
          src={imageSrc}
          alt={name}
          className="w-full bg-slate-300 object-cover"
          style={{ width: "100%", height: "auto" }}
        />
        <button
          className="absolute top-6 left-6 min-w-7 min-h-7 w-7 h-7 rounded-full flex items-center justify-center bg-white transition-colors duration-300 hover:bg-[#1151AB] active:bg-opacity-60"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <Paper color={isHovered ? "white" : "#1151AB"} />
        </button>
        <p className="text-xl font-semibold mt-6 mb-1">{name}</p>
        <p className="text-base font-medium opacity-60">{position}</p>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-50 flex justify-center items-center">
          {/* Фон */}
          <div className="absolute inset-0" onClick={handleCloseModal}></div>

          {/* Контент модального окна */}
          <div className="relative  w-[90%]  max-w-4xl max-h-[85%] z-40 flex flex-col gap-6 overflow-y-auto">
            <div className="flex relative flex-col bg-white p-4 md:p-8 md:flex-row gap-6 mt-32">
              <img
                src={imageSrc}
                alt={altText}
                className="w-full md:w-auto object-cover"
                style={{ width: "278px", height: "358px" }}
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3 className="text-lg font-bold text-gray-500 mb-6">
                  {position}
                </h3>
                <pre
                  className={`${manrope.className} text-black text-sm pb-7 font-medium whitespace-pre-wrap break-words`}
                >
                  {description}
                </pre>
              </div>
            </div>
            {/* Кнопка закрытия */}
            <button
              onClick={handleCloseModal}
              className="absolute top-20  right-0 transition-colors"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StafCard;
