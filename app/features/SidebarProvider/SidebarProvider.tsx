"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
interface SidebarContextType {
  sidebar: boolean;
  sidebarResponsive:boolean
  handleSidebar: () => void;
  openSidebar:()=>void;
  closeSidebar:()=>void
}
export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);
const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [sidebarResponsive,setSidebarResponsive]=useState<boolean>(false)
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const openSidebar=()=>{
    setSidebarResponsive(true)
  }
  const closeSidebar=()=>{
    setSidebarResponsive(false)
  }
  return (
    <SidebarContext.Provider value={{ sidebar,handleSidebar,closeSidebar,sidebarResponsive,openSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useLayout = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Something went wrong in sidebar layout");
  }
  return context;
};
