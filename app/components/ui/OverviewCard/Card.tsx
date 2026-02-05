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
  amount_color?: string;
  body_text_color?: string;
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
  amount_color = "text-gray-800 dark:text-white",
  body_text_color = "text-gray-600 dark:text-white",
}) => {
  return (
    <>
      <div
        className={`px-6 py-4  w-full rounded-2xl flex flex-col ${container_color}`}
      >
        <div className="flex justify-between items-center w-full">
          <span className=" text-sm sm:text-lg capitalize font-medium">
            {title}
          </span>
          <div
            className={`w-7 h-7 rounded-full ${icon_color} flex justify-center items-center`}
          >
            <Icon size={12} />
          </div>
        </div>
        <span
          className={`font-semibold text-base mt-3 sm:text-xl ${amount_color}`}
        >
          ${total_amount}
        </span>
        <div
          className={`flex items-center gap-3 ${body_text_color} text-xs mt-1 font-medium`}
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
