import React, { useState } from "react";
export const useDrawer = (data: any[]) => {
  const [drawerConfig,setDrawerConfig]=useState<string>("")
  const [drawerContainer, setDrawerContainer] = useState<boolean>(false);
  const [drawerOverlay, setDrawerOverlay] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  //handle drawer
  const showCreateDrawer = (value:string) => {
    setDrawerContainer(true);
    setDrawerOverlay(true);
    setDrawerConfig(value)
  };
  const showDrawer = (id: number,value:string) => {
    setDrawerContainer(true);
    setDrawerOverlay(true);
    setSelectedId(id);
    setDrawerConfig(value)
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
    drawerConfig,
    selectedData,
  };
};
