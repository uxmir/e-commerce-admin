"use client"
import React, { useEffect, useState } from "react";
import { itemProps } from "../../../types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink: React.FC<itemProps> = ({ href, item, link, Icon, childs }) => { 
  const [child, setChild] = useState<boolean>(false);
  const pathName: string = usePathname();
  const handleChild = () => {
    setChild(!child);
  };
  return (
    <>
      <div className="w-full">
        <Link href={href}>
          <div
            onClick={handleChild}
            className={`py-2 w-full  hover:bg-blue-600 dark:hover:bg-[#15104B] hover:text-white rounded capitalize flex gap-x-2 items-center px-4 ${pathName === link ? "bg-blue-600 dark:bg-[#15104B] text-white" : "text-gray-700 dark:text-white"}`}
          >
            {Icon && <Icon size={18} />}
            <span>{item}</span>
          </div>
        </Link>
        <div
          className={`overflow-y-hidden  transition-all duration-500  ${child === true ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="w-full  px-4 flex flex-col gap-y-1">
            {childs?.map((data) => (
              <div
                key={data.id}
                className={`px-3 py-2 w-full rounded  hover:bg-blue-600 dark:hover:bg-[#15104B] hover:text-white ${pathName === data.child_link ? "bg-blue-600  dark:bg-[#15104B] text-white" : "text-gray-700 dark:text-white"}`}
              >
                <Link href={data.child_link}>
                  <div>{data.data}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLink