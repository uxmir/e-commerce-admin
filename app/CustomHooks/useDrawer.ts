import React, { useState } from "react";
export const useDrawer = (data: any[]) => {
  const [drawerContainer, setDrawerContainer] = useState<boolean>(false);
  const [drawerOverlay, setDrawerOverlay] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  //handle drawer
  const showCreateDrawer = () => {
    setDrawerContainer(true);
    setDrawerOverlay(true);
  };
  const showDrawer = (id: number) => {
    setDrawerContainer(true);
    setDrawerOverlay(true);
    setSelectedId(id);
  };
  const closeDrawer = () => {
    setDrawerContainer(false);
    setDrawerOverlay(false);
    setSelectedId(null);
  };
  //finding selected data
  const selectedData = data?.find((d) => d.id === selectedId);
  return {
    drawerContainer,
    drawerOverlay,
    showDrawer,
    closeDrawer,
    showCreateDrawer,
    selectedData,
  };
};
