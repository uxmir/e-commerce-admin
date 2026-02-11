"use client";
import TableComponent from "@/app/components/ui/DataTable/TableComponent";
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import Card from "@/app/components/ui/OverviewCard/Card";
import { Printer, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { usePagination } from "@/app/CustomHooks/usePaginaton";
import PaginationComponent from "@/app/components/ui/Pagination/PaginationComponent";
import { tableData } from "../../mockapi/homeTable";
import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import Badge from "@/app/components/ui/Badge/Badge";
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
        <div className="col-span-12 lg:col-span-8">
          <Heading headingValue="Today's Order" />
          <div className="mt-4">
            <OverviewTable />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4"></div>
      </div>
    </div>
  );
};

export default page;
const OverviewTable: React.FC = () => {
  const { paginatedData, totalPage, currentPage, setCurrentPage } =
    usePagination(tableData);
  const { getStyle } = useColorStatus();
  const { selectedId, handlePrint } = usePrint(tableData);
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
          <div className="flex justify-end items-center gap-x-2">
            <Printer
              size={18}
              onClick={() => handlePrint(row.id)}
              className="cursor-pointer"
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

import { tableProps } from "@/app/types/homeTable";
interface invoiceProps {
  printedData: tableProps;
}
const InvoicePdf: React.FC<invoiceProps> = ({ printedData }) => {
  return (
    <>
      <div className="w-[800px]  bg-white  ">
        {/* Invoice Header */}
        <div className="flex justify-between items-center border-b pb-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-wider text-blue-600">
              Invoice
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Invoice ID: #{printedData.invoice_id}
            </p>
          </div>
          <div className="text-right">
            <h2 className="font-bold text-lg">Your Shop Name</h2>
            <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
            <p className="text-xs text-gray-500">support@yourshop.com</p>
          </div>
        </div>

        {/* Billing Details */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-xs uppercase text-gray-400 font-bold mb-1">
              Bill To:
            </p>
            <h3 className="font-bold text-lg capitalize">
              {printedData.customer_name}
            </h3>
            <p className="text-sm text-gray-600">
              Customer ID: {printedData.id}
            </p>
            <p className="text-sm text-gray-600">Date: {printedData.date}</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase text-gray-400 font-bold mb-1">
              Payment Status:
            </p>
            <span className="text-sm font-bold px-2 py-1 bg-gray-100 rounded uppercase">
              {printedData.status}
            </span>
            <p className="text-xs mt-3 uppercase text-gray-400 font-bold mb-1">
              Method:
            </p>
            <p className="text-sm font-semibold capitalize">
              {printedData.method}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-3 text-sm font-bold uppercase">Description</th>
              <th className="py-3 text-right text-sm font-bold uppercase">
                Quantity
              </th>
              <th className="py-3 text-right text-sm font-bold uppercase">
                Unit Price
              </th>
              <th className="py-3 text-right text-sm font-bold uppercase">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 text-sm">
                Product Order - {printedData.invoice_id}
              </td>
              <td className="py-4 text-right text-sm">1</td>
              <td className="py-4 text-right text-sm">${printedData.amount}</td>
              <td className="py-4 text-right text-sm font-semibold">
                ${printedData.amount}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Summary Area */}
        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-gray-600">Subtotal:</span>
              <span className="text-sm font-semibold">
                ${printedData.amount}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-gray-600">Tax (0%):</span>
              <span className="text-sm font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between py-3 mt-1 bg-gray-50 px-2">
              <span className="font-bold">Total Amount:</span>
              <span className="font-bold text-lg text-blue-700">
                ${printedData.amount}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t pt-6">
          <p className="text-sm font-semibold">Thank you for your business!</p>
          <p className="text-xs text-gray-400 mt-1">
            This is a computer generated invoice and needs no signature.
          </p>
        </div>
      </div>
    </>
  );
};
