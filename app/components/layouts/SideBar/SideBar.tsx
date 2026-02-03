"use client";
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider";
import React, { useState } from "react";
import { items } from "../../../types/nav";
import { CatIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems: items[] = [
  {
    id: 1,
    item: "Home",
    link: "/home",
    icon: HomeIcon,
  },
  {
    id: 2,
    item: "Product",
    link: "/product",
    icon: CatIcon,
  },
  {
    id: 3,
    item: "Category",
    link: "#",
    icon: HomeIcon,
  },
];
const SideBar: React.FC = () => {
  const { sidebar, closeSidebar, sidebarResponsive } = useLayout();
  return (
    <>
      <div
        className={`fixed px-4 top-0 z-[9999] hidden lg:block  left-0 bg-white transition-all duration-500 h-[100vh] border-r border-gray-200  overflow-y-auto ${sidebar === true ? "w-64" : "w-5"}`}
      >
        <div className="flex flex-col gap-y-4 mt-5">
          {navItems?.map((data) => (
            <NavLink
              key={data.id}
              href={data.link!}
              item={data.item}
              Icon={data.icon}
              link={data.link!}
            />
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
        className={` max-[350px]:w-2/3 w-1/3 h-full transition-all duration-500 fixed left-0 top-0 z-[9999] bg-white  ${sidebarResponsive === true ? "-translate-x-0" : "-translate-x-full"}`}
      ></div>
    </>
  );
};
export default SideBar;

interface itemProps {
  href: string;
  item: string;
  link: string;
  Icon?: React.ComponentType<{ size: number }>;
}
const NavLink: React.FC<itemProps> = ({ href, item, link, Icon }) => {
  const pathName: string = usePathname();
  return (
    <>
      <Link href={href}>
        <div
          className={`py-2 w-full rounded capitalize flex gap-x-2 items-center px-4 ${pathName === link ? "bg-blue-600 text-white" : ""}`}
        >
          {Icon && <Icon size={18} />}
          <span>{item}</span>
        </div>
        {/* <div className="w-full bg-blue-200 h-10">

        </div> */}
      </Link>
    </>
  );
};
