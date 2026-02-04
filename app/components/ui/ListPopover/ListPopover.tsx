"use client";
import React, { ReactNode } from "react";
interface popProps {
  isShow: boolean;
  children: ReactNode;
  customClass?: string;
  bgColor?:string
}
const ListPopover: React.FC<popProps> = ({ isShow, children, customClass,bgColor="bg-white dark:bg-[#27244b]" }) => {
  return (
    <>
      {isShow === true && (
        <div
          className={`w-[300px] h-[100px] ${bgColor} overflow-y-auto px-3 py-3 rounded-2xl shadow-lg absolute top-5 right-2 
          max-[400px]:translate-x-15 ${customClass}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default ListPopover;
