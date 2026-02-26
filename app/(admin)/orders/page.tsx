"use client";
import TableComponent from "@/app/components/ui/DataTable/TableComponent";
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import Card from "@/app/components/ui/OverviewCard/Card";
import { Eye, Printer, ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePagination } from "@/app/CustomHooks/usePaginaton";
import PaginationComponent from "@/app/components/ui/Pagination/PaginationComponent";
import { tableData } from "../../mockapi/homeTable";
import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import Badge from "@/app/components/ui/Badge/Badge";
import InvoicePdf from "./InvoicePdf";
import Link from "next/link";
import { usePrint } from "@/app/CustomHooks/usePrint";
import { useAppDispatch, useAppSelector } from "@/app/CustomHooks/api";
import { todayOrderData } from "@/app/store/HomeDataSlice";
import Loader from "@/app/components/ui/Loader/Loader";
const page: React.FC = () => {
  return (
    <>
      <div className="">
        <Heading headingValue="Orders" />
        <div className="mt-4 w-full">
          <OverviewTable />
        </div>
      </div>
    </>
  );
};
export default page;
const OverviewTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.homeData);
  const { paginatedData, totalPage, currentPage, setCurrentPage } =
    usePagination(data);
  const { getStyle } = useColorStatus();
  const { selectedId, handlePrint } = usePrint();
  const printedData = data?.find((d) => d.id === selectedId);

  //mock api is calling
  useEffect(() => {
    dispatch(todayOrderData());
  }, [dispatch]);

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
              <Eye size={18} className="cursor-pointer text-blue-600" />
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
//loading state
if(loading){
  return(
    <>
    <Loader/>
    </>
  )
}
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
