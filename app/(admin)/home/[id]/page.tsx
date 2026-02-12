"use client";
import React, { use } from "react";
import { tableData } from "@/app/mockapi/homeTable";
import InvoicePdf from "../InvoicePdf";
interface pageProps {
  params: Promise<{
    id: string;
  }>;
}
const page: React.FC<pageProps> = ({ params }) => {
   const resolvedParams=use(params) 
  const id = Number(resolvedParams.id);
  const detailsData = tableData?.find((d) => d.id === id);
  if (!detailsData) {
    return (
      <>
        <div>Data is not found</div>
      </>
    );
  }
  return (
    <div>
    
      <InvoicePdf 
       printedData={detailsData} 
       container_class="px-5 py-5 rounded shadow-lg mx-auto mt-20"
       />
    </div>
  );
};

export default page;
