"use client";
import React, { ReactNode } from "react";
interface buttonProps {
  children: ReactNode;
  colorProps?:string;
  width?:string;
  customClass?:string;
  buttonType?: "submit" | "button";
  onEvent?: () => void;
}
const Button: React.FC<buttonProps> = ({
  children,
  colorProps="bg-blue-600 hover:bg-blue-400 dark:hover:bg-blue-400 text-white",
  width,
  customClass,
  buttonType,
  onEvent,
}) => {
  return (
    <>
      <button
        type={buttonType === "submit" ? "submit" : "button"}
        onClick={onEvent}
        className={`px-3 py-2 w-full sm:w-auto rounded-md cursor-pointer capitalize font-medium ${colorProps} ${width} ${customClass}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
