"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
interface SidebarContextType {
  sidebar: boolean;
  handleSidebar: () => void;
}
export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);
const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <SidebarContext.Provider value={{ sidebar,handleSidebar }}>
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
