import React, { ReactNode } from "react";
import Container from "../components/layouts/LayoutsContainer/Container";
import SidebarProvider from "../features/SidebarProvider/SidebarProvider";
import SideBar from "../components/layouts/SideBar/SideBar";
import TopBar from "../components/layouts/TopBar/TopBar";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
        <SidebarProvider>
          <Container>{children}</Container>
        </SidebarProvider>
    </>
  );
};

export default layout;
