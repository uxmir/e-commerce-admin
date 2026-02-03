"use client";
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider";
import React from "react";
const SideBar: React.FC = () => {
  const { sidebar, closeSidebar, openSidebar, sidebarResponsive } = useLayout();
  return (
    <>
      <div
        className={`fixed top-0 z-[9999] hidden lg:block  left-0 bg-white transition-all duration-500 h-[100vh] border-r border-gray-200  overflow-y-auto ${sidebar === true ? "w-64" : "w-5"}`}
      ></div>
      {sidebarResponsive === true && (
        <div
          onClick={closeSidebar}
          className="fixed top-0 left-0 right-0 z-[9999] bg-black/60 w-full h-full block lg:hidden"
        ></div>
      )}
      <div
        className={` max-[350px]:w-2/3 w-1/3 h-full transition-all duration-500 fixed left-0 top-0 z-[9999] bg-white  ${sidebarResponsive === true ? "-translate-x-0" : "-translate-x-full"}`}
      ></div>
    </>
  );
};

export default SideBar;
