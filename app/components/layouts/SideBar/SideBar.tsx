"use client";
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider";
import React, { useState } from "react";
import { items } from "../../../types/nav";
import { CatIcon, Clock, HomeIcon, LayoutDashboard, ShoppingCart } from "lucide-react";
import NavLink from "../../ui/NavItems/NavLink";
const navItems: items[] = [
  {
    id: 1,
    item: "Home",
    link: "/home",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    item: "Products",
    link: "/product",
    icon: ShoppingCart,
  },
  {
    id: 3,
    item: "orders",
    link: "/orders",
    icon: Clock,
  },
];
const SideBar: React.FC = () => {
  const { sidebar, closeSidebar, sidebarResponsive } = useLayout();
  return (
    <>
      <div
        className={`fixed px-4 top-0 z-[9999] hidden lg:block  left-0 bg-white dark:bg-[#33304E] transition-all duration-700 h-[100vh] border-r border-gray-200  overflow-y-auto ${sidebar === true ? "w-64" : "w-0 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-y-2 mt-5">
          {navItems?.map((data) => (
            <div
              key={data.id}
              className={` transition-all duration-500 ${sidebar === true ? "visible opacity-100 pointer-events-auto delay-500" : " invisible opacity-0 pointer-events-none delay-0"}`}
            >
              <NavLink
                href={data.link!}
                item={data.item}
                Icon={data.icon}
                link={data.link!}
                childs={data.childs}
              />
            </div>
          ))}
        </div>
      </div>

      {/*============ResponsiveSIdebar============ */}
      {sidebarResponsive === true && (
        <div
          onClick={closeSidebar}
          className="fixed top-0 left-0 right-0 z-[9999] bg-black/60 w-full h-full block lg:hidden"
        ></div>
      )}
      <div
        className={` w-2/3 sm:w-1/3 h-full transition-all duration-500 fixed left-0 top-0 z-[9999] bg-white dark:bg-[#1D1B32]  ${sidebarResponsive === true ? "-translate-x-0" : "-translate-x-full"}`} 
      >
      <div className="mt-5">
              {navItems?.map((data) => (
          <div key={data.id} className="px-4">
            <NavLink
              href={data.link!}
              item={data.item}
              Icon={data.icon}
              link={data.link!}
              childs={data.childs}
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};
export default SideBar;

