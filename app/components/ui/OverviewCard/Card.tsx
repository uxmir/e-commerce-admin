"use client";
import React from "react";

interface cardProps {
  title: string;
  total_amount: number;
  cash?: number;
  card?: number;
  credit?: number;
  Icon: React.ComponentType<{ size: number }>;
  container_color?: string;
  icon_color?: string;
  body_text_color?: string;
  border_color?:string
}
const Card: React.FC<cardProps> = ({
  title,
  total_amount,
  card,
  cash,
  credit,
  Icon,
  container_color = "bg-white dark:bg-black",
  icon_color = "text-white dark:text-gray-800 bg-black dark:bg-white",
  body_text_color = "text-gray-600 dark:text-white",
  border_color="border-gray-800 dark:border-gray-100"
}) => {
  return (
    <>
      <div
        className={`px-6 py-4 border-b-4 ${border_color} w-full rounded-2xl flex flex-col ${container_color}`}
      >
        <div className="flex justify-between items-center w-full">
          <span className={`text-sm sm:text-lg capitalize font-medium ${body_text_color}`}>
            {title}
          </span>
          <div
            className={`w-7 h-7 rounded-full ${icon_color} flex justify-center items-center`}
          >
            <Icon size={12} />
          </div>
        </div>
        <span
          className={`font-semibold text-base mt-3 sm:text-xl ${body_text_color}`}
        >
          {total_amount}
        </span>
        <div
          className={`flex max-[368px]:flex-col  gap-3 ${body_text_color} text-xs mt-1 font-medium`}
        >
          <span>Cash:${cash || "10.000"}</span>{" "}
          <span>Card:${card || "20.000"}</span>{" "}
          <span>Credit:${credit || "10.000"}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
