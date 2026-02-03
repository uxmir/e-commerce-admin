"use client";
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider";
import { MenuIcon, Moon, PanelRight, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
const TopBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
  setMounted(true);
  }, []);
  const { sidebar, handleSidebar, openSidebar } = useLayout();
  if (!mounted) {
    return (
      <div
        className={`py-3 w-full flex justify-between items-center fixed top-0 pr-5 transition-all duration-500 bg-white border-b border-gray-200 ${sidebar ? "pl-10 lg:pl-74" : "pl-10"}`}
      >
        <div className="animate-pulse bg-gray-200 h-6 w-6 rounded" />
      </div>
    );
  }
  return (
    <div
      className={`py-4 w-full flex justify-between items-center fixed top-0 pr-5 cursor-pointer  transition-all duration-500 bg-white dark:bg-[#33304E] border-b border-gray-200 ${sidebar === true ? " pl-10 lg:pl-74" : "pl-10"}`}
    >
      <div>
        <PanelRight onClick={handleSidebar} className="hidden lg:block" />
        <MenuIcon onClick={openSidebar} className="block lg:hidden" />
      </div>
      <div>
        {theme === "light" && (
          <Moon onClick={() => setTheme("dark")} className={``} />
        )}
        {theme === "dark" && (
          <Sun onClick={() => setTheme("light")} className={` `} />
        )}
      </div>
    </div>
  );
};
export default TopBar;
