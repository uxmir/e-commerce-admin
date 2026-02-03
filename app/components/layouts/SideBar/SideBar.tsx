"use client";
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider";
import React, { useState } from "react";
import { items } from "../../../types/nav";
import { CatIcon, HomeIcon } from "lucide-react";
import NavLink from "../../NavItems/NavLink";
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
    childs: [
      {
        id: 1,
        data: "Orders",
        child_link: "#",
      },
      {
        id: 2,
        data: "Orders",
        child_link: "/product",
      },
    ],
  },
];
const SideBar: React.FC = () => {
  const { sidebar, closeSidebar, sidebarResponsive } = useLayout();
  return (
    <>
      <div
        className={`fixed px-4 top-0 z-[9999] hidden lg:block  left-0 bg-white transition-all duration-700 h-[100vh] border-r border-gray-200  overflow-y-auto ${sidebar === true ? "w-64" : "w-0 pointer-events-none"}`}
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
        className={` w-2/3 sm:w-1/3 h-full transition-all duration-500 fixed left-0 top-0 z-[9999] bg-white  ${sidebarResponsive === true ? "-translate-x-0" : "-translate-x-full"}`}
      >
        {navItems?.map((data) => (
          <div key={data.id} className="px-4 mt-5">
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
    </>
  );
};
export default SideBar;

// interface itemArr {
//   id: number;
//   data: string;
//   child_link: string;
// }
// interface itemProps {
//   href: string;
//   item: string;
//   link: string;
//   childs?: itemArr[];
//   Icon?: React.ComponentType<{ size: number }>;
// }
// const NavLink: React.FC<itemProps> = ({ href, item, link, Icon, childs }) => {
//   const [child, setChild] = useState<boolean>(false);
//   const pathName: string = usePathname();
//   const handleChild = () => {
//     setChild(!child);
//   };
//   return (
//     <>
//       <div className="w-full">
//         <Link href={href}>
//           <div
//             onClick={handleChild}
//             className={`py-2 w-full hover:bg-blue-600 hover:text-white rounded capitalize flex gap-x-2 items-center px-4 ${pathName === link ? "bg-blue-600 text-white" : ""}`}
//           >
//             {Icon && <Icon size={18} />}
//             <span>{item}</span>
//           </div>
//         </Link>
//         <div
//           className={`overflow-y-hidden  transition-all duration-500  ${child === true ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
//         >
//           <div className="w-full  px-4 flex flex-col gap-y-1">
//             {childs?.map((data) => (
//               <div
//                 key={data.id}
//                 className={`px-3 py-2 w-full  hover:bg-blue-600 hover:text-white ${pathName === data.child_link ? "bg-blue-600 text-white" : ""}`}
//               >
//                 <Link href={data.child_link}>
//                   <div>{data.data}</div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
