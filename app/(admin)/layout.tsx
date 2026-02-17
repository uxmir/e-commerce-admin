"use client"
import React, { ReactNode } from "react";
import Container from "../components/layouts/LayoutsContainer/Container";
import SidebarProvider from "../features/SidebarProvider/SidebarProvider";
import SideBar from "../components/layouts/SideBar/SideBar";
import TopBar from "../components/layouts/TopBar/TopBar";
import { Provider } from "react-redux";
import { store } from "../store/store";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
    <Provider store={store}>
        <SidebarProvider>
          <Container>{children}</Container>
        </SidebarProvider>
        </Provider>
    </>
  );
};

export default layout;
