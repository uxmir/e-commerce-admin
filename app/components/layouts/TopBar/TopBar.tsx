"use client";
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider";
import { Bell, MenuIcon, Moon, PanelRight, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import ListPopover from "../../ui/ListPopover/ListPopover";
import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import { useRandomColor } from "@/app/CustomHooks/useRandomColor";
import  Link  from "next/link";
const TopBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [listNotification, setListNotification] = useState<boolean>(false);
  const [profilePopup, setProfilePopup] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { sidebar, handleSidebar, openSidebar } = useLayout();
  if (!mounted) {
    return (
      <div
        className={`py-3 w-full flex justify-between items-center fixed z-50 top-0 pr-5 transition-all duration-500 bg-white border-b border-gray-200 ${sidebar ? "pl-10 lg:pl-74" : "pl-10"}`}
      >
        <div className="animate-pulse bg-gray-200 h-6 w-6 rounded" />
      </div>
    );
  }
  return (
    <div
      className={`py-4 w-full flex justify-between items-center fixed top-0 z-50 pr-5 cursor-pointer  transition-all duration-500 bg-white dark:bg-[#33304E] border-b border-gray-200 ${sidebar === true ? " pl-10 lg:pl-74" : "pl-10"}`}
    >
      <div>
        <PanelRight onClick={handleSidebar} className="hidden lg:block" />
        <MenuIcon onClick={openSidebar} className="block lg:hidden" />
      </div>
      <div className="flex gap-x-4 items-center">
        <div>
          {theme === "light" && (
            <Moon size={18} onClick={() => setTheme("dark")} className={``} />
          )}
          {theme === "dark" && (
            <Sun size={18} onClick={() => setTheme("light")} className={` `} />
          )}
        </div>
        <div className="relative">
          <Bell
            onClick={() => setListNotification(!listNotification)}
            className="text-blue-600 dark:text-white"
          />
          <div className="absolute top-[-4px] left-3 w-4 h-4 rounded-full flex justify-center items-center bg-green-600 text-white text-[8px]">
            {listData?.length}
          </div>
          <ListPopover isShow={listNotification} customClass="h-[200px] ">
            <NotificationList />
          </ListPopover>
        </div>
        <div className="relative">
          <div
            onClick={() => setProfilePopup(!profilePopup)}
            className="w-8 h-8 rounded-full bg-green-200 flex justify-center items-center text-green-600 cursor-pointer"
          >
            M
          </div>
          <ListPopover isShow={profilePopup} customClass="py-6 h-auto ">
            <div className="flex flex-col gap-y-3 text-gray-600 dark:text-white font-medium">
             <Link href={'#'}>My Profile</Link>
             <span className="text-red-600">Logout</span>
            </div>
          </ListPopover>
        </div>
      </div>
    </div>
  );
};
export default TopBar;

interface listProps {
  id: number;
  list_id: number;
  name: string;
  order_type: string;
  date: string;
  time: string;
}

const listData: listProps[] = [
  {
    id: 1,
    list_id: 2055,
    name: "John Doe",
    order_type: "new",
    date: "10 Jan 2026",
    time: "10:30 PM",
  },
  {
    id: 2,
    list_id: 2056,
    name: "Sarah Khan",
    order_type: "pending",
    date: "11 Jan 2026",
    time: "02:15 PM",
  },
  {
    id: 3,
    list_id: 2057,
    name: "Rahat Kabir",
    order_type: "delivered",
    date: "12 Jan 2026",
    time: "09:00 AM",
  },
  {
    id: 4,
    list_id: 2058,
    name: "Anika Tabassum",
    order_type: "cancelled",
    date: "12 Jan 2026",
    time: "11:45 PM",
  },
  {
    id: 5,
    list_id: 2059,
    name: "Tanvir Ahmed",
    order_type: "new",
    date: "13 Jan 2026",
    time: "05:20 PM",
  },
  {
    id: 6,
    list_id: 2060,
    name: "Mehedi Hasan",
    order_type: "processing",
    date: "14 Jan 2026",
    time: "08:10 PM",
  },
];
const NotificationList: React.FC = () => {
  const { getStyle } = useColorStatus();
  const { getColor } = useRandomColor();
  return (
    <>
      {listData?.map((data) => (
        <div key={data.id} className="flex gap-x-2 items-start mt-5">
          <div
            style={{
              backgroundColor: `${getColor()}30`,
              color: `${getColor()}`,
            }}
            className={`w-8 h-8 uppercase rounded-full font-medium flex justify-center items-center`}
          >
            {data?.name.charAt(0)}
          </div>
          <div className="flex flex-col gap-2 capitalize text-sm text-gray-600 dark:text-white">
            <span>
              {data?.name} has ordered on {data?.list_id}
            </span>
            <span>
              {" "}
              <span
                className={`px-2 py-1 text-[10px] rounded ${getStyle(data?.order_type)}`}
              >
                {data?.order_type}
              </span>{" "}
              {data?.date}
              {data?.time}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
