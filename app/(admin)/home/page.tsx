"use client";
import TableComponent from "@/app/components/ui/DataTable/TableComponent";
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import Card from "@/app/components/ui/OverviewCard/Card";
import { Eye, Printer, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { usePagination } from "@/app/CustomHooks/usePaginaton";
import PaginationComponent from "@/app/components/ui/Pagination/PaginationComponent";
import { tableData } from "../../mockapi/homeTable";
import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import Badge from "@/app/components/ui/Badge/Badge";
import InvoicePdf from "./InvoicePdf";
import  Link   from "next/link";
import { usePrint } from "@/app/CustomHooks/usePrint";
const page: React.FC = () => {
  return (
    <div className="">
      <Heading headingValue="dashboard overview" />
      {/*========dashboardoverview========*/}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card
          title="Total Order"
          total_amount={120.0}
          Icon={ShoppingCart}
          container_color="bg-[#DDEDFF]"
          body_text_color="text-gray-700"
          icon_color="text-white bg-[#28629C]"
          border_color="border-[#28629C]"
        />
        <Card
          title="Completed Order"
          total_amount={120.0}
          Icon={ShoppingCart}
          container_color="bg-[#D2F6D6]"
          body_text_color="text-gray-700"
          icon_color="text-white bg-[#289C36]"
          border_color="border-[#289C36]"
        />
        <Card
          title="Pending Order"
          total_amount={120.0}
          Icon={ShoppingCart}
          container_color="bg-[#F8E8BD]"
          body_text_color="text-gray-700"
          icon_color="text-white bg-[#9C7D28]"
          border_color="border-[#9C7D28]"
        />
        <Card
          title="Cancelled Order"
          total_amount={120.0}
          Icon={ShoppingCart}
          container_color="bg-[#FEC7C7]"
          body_text_color="text-gray-700"
          icon_color="text-white bg-[#9C2828]"
          border_color="border-[#9C2828]"
        />
      </div>
      {/*=============
      datatable and overview by chart's
      ============= */}
      <div className="grid grid-cols-12 mt-6   gap-6">
        <div className="col-span-12 lg:col-span-8"></div>
        <div className="col-span-12 lg:col-span-4"></div>
      </div>
      {/*======today's order====== */}
      <Heading headingValue="Today's Order" />
      <div className="mt-4 w-full">
        <OverviewTable />
      </div>
    </div>
  );
};

export default page;
const OverviewTable: React.FC = () => {
  const { paginatedData, totalPage, currentPage, setCurrentPage } =
    usePagination(tableData);
  const { getStyle } = useColorStatus();
  const { selectedId, handlePrint } = usePrint();
  const printedData = tableData.find((d) => d.id === selectedId);
  const tableColumns = [
    {
      header: "Invoice No",
      key: "invoice_id",
    },
    {
      header: "Customer Name",
      key: "customer_name",
    },
    {
      header: "method",
      key: "method",
    },
    {
      header: "Price",
      key: "amount",
    },
    {
      header: "Date",
      key: "date",
    },
    {
      header: "Status",
      key: "status",
      render: (row: any) => (
        <Badge color={`${getStyle(row.status)}`}>{row.status}</Badge>
      ),
    },
    {
      header: "Actions",
      key: "action",
      render: (row: any) => (
        <>
          <div className="flex justify-end items-center gap-x-3">
         <Link href={`/home/${row.id}`}>
             <Eye
            size={18}
            className="cursor-pointer text-blue-600"
            />
         </Link>
            <Printer
              size={18}
              onClick={() => handlePrint(row.id)}
              className="cursor-pointer text-green-600"
            />
          </div>
        </>
      ), 
    },
  ];
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      @media print {
        body * {
          visibility: hidden;
        }
        #printable-invoice, #printable-invoice * {
          visibility: visible;
        }
        #printable-invoice {
          position: absolute;
          left: 0;
          top: 0;
          display: block !important;
        }
      }
    `,
        }}
      />
      <TableComponent
        sortIcon={true}
        columns={tableColumns}
        data={paginatedData}
      />
      <PaginationComponent
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
      <div id="printable-invoice" style={{ display: `none` }}>
        {printedData && (
          <>
            <InvoicePdf printedData={printedData} />
          </>
        )}
      </div>
    </>
  );
};
