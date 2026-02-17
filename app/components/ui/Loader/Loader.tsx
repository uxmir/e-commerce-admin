"use client";
import { Loader2 } from "lucide-react";
import React from "react";
interface loaderProps {
  height?: string;
  loaderSize?: number;
}
const Loader: React.FC<loaderProps> = ({
  height = "h-full",
  loaderSize = 18,
}) => {
  return (
    <div className={`flex justify-center items-center w-full  ${height}`}>
      <Loader2 size={loaderSize} className="animate-spin text-blue-600" />
    </div>
  );
};

export default Loader;
