"use client";
import React, { ReactNode } from "react";
interface drawerProps {
  overlay: boolean;
  container: boolean;
  position: string;
  width?: string;
  children: ReactNode;
  close: () => void;
}
const Drawer: React.FC<drawerProps> = ({
  overlay,
  container,
  children,
  position,
  width = "w-1/2",
  close,
}) => {
  const positionDrawer: { right?: string; left?: string } = {
    left: `left-0 ${container === true ? "translate-x-0" : "-translate-x-full"}`,
    right: `right-0 ${container === true ? "translate-x-0" : "translate-x-full"}`,
  };
  const { left, right } = positionDrawer;
  return (
    <>
      {/* =======drawer-overlay===== */}
      {overlay === true && (
        <div
          onClick={close}
          className="w-full h-full bg-black/60 fixed top-0 left-0 right-0 z-[9999]"
        ></div>
      )}
      <div
        className={`bg-white h-[100vh] overflow-y-auto p-2 sm:p-10 fixed ${width}  transition-all duration-500 top-0 z-[9999] ${position === "right" ? right : left}`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
