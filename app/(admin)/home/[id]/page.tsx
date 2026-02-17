"use client";
import React, { use, useEffect } from "react";
import { tableData } from "@/app/mockapi/homeTable";
import InvoicePdf from "../InvoicePdf";
interface pageProps {
  params: Promise<{
    id: string;
  }>;
}
const page: React.FC<pageProps> = ({ params }) => {
  const { handlePrint } = usePrint();
  const resolvedParams = use(params);
  const id = Number(resolvedParams.id);
  const dispatch=useAppDispatch();
  const {data,loading}=useAppSelector((state)=>state.homeData)
  const detailsData = data?.find((d) => d.id === id);
  useEffect(()=>{
    dispatch(todayOrderData())
  },[dispatch])
  //loading state
  if(loading){
    return(
      <>
      <Loader loaderSize={32}/>
      </>
    )
  }
  if (!detailsData) {
    return (
      <>
        <Loader loaderSize={32}/>
      </>
    );
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
      <div className="flex flex-col gap-6 mb-5">
        <div className="w-full  xl:max-w-[800px] mx-auto flex justify-end">
          <Button width="w-[80px]" onEvent={() => handlePrint(id)}>
            Print
          </Button>
        </div>
        <InvoiceDetails
          printedData={detailsData}
          container_class="px-5 py-5 rounded shadow-lg mx-auto  bg-white dark:bg-[#2d275f] w-full px-5 xl:max-w-[800px]"
        />
      </div>
      {
        <div id="printable-invoice" style={{ display: `none` }}>
          {detailsData && (
            <>
              <InvoicePdf printedData={detailsData} />
            </>
          )}
        </div>
      }
    </>
  );
};
export default page;

import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import { tableProps } from "@/app/types/homeTable";
import Button from "@/app/components/ui/Button/Button";
import { usePrint } from "@/app/CustomHooks/usePrint";
import { useAppDispatch, useAppSelector } from "@/app/CustomHooks/api";
import { todayOrderData } from "@/app/store/HomeDataSlice";
import Loader from "@/app/components/ui/Loader/Loader";
interface invoiceProps {
  printedData: tableProps;
  container_class?: string;
}
const InvoiceDetails: React.FC<invoiceProps> = ({ printedData }) => {
  const { getStyle } = useColorStatus();
  return (
    <>
      <div
        className={`max-w-[800px] w-full mx-auto rounded-lg  p-4 sm:p-8  bg-white dark:bg-[#2d275f]`}
      >
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-6 mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-blue-600">
              Invoice
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Invoice ID: #{printedData?.invoice_id}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <h2 className="font-bold text-base sm:text-lg">Your Shop Name</h2>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Dhaka, Bangladesh
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500">
              support@mirshop.com
            </p>
          </div>
        </div>

        {/* Billing Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-[10px] sm:text-xs uppercase text-gray-400 font-bold mb-1">
              Bill To:
            </p>
            <h3 className="font-bold text-base sm:text-lg capitalize leading-tight">
              {printedData?.customer_name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Customer ID: {printedData?.id}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Date: {printedData?.date}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs uppercase font-bold mb-1 text-gray-400">
              Payment Status:
            </p>
            <span
              className={`inline-block text-[10px] sm:text-sm font-bold px-2 py-1 bg-gray-100 rounded uppercase ${getStyle(printedData?.status)}`}
            >
              {printedData?.status}
            </span>
            <p className="text-[10px] sm:text-xs mt-3 uppercase text-gray-400 font-bold mb-1">
              Method:
            </p>
            <p className="text-xs sm:text-sm font-semibold capitalize">
              {printedData?.method}
            </p>
          </div>
        </div>

        {/* Items Table - স্ক্রলযোগ্য করা হয়েছে ছোট ডিভাইসের জন্য */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse mb-8 min-w-[300px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 text-[10px] sm:text-sm font-bold uppercase">
                  Description
                </th>
                <th className="py-3 text-right text-[10px] sm:text-sm font-bold uppercase px-2">
                  Qty
                </th>
                <th className="py-3 text-right text-[10px] sm:text-sm font-bold uppercase">
                  Price
                </th>
                <th className="py-3 text-right text-[10px] sm:text-sm font-bold uppercase">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 text-[11px] sm:text-sm">
                  Order - {printedData?.invoice_id}
                </td>
                <td className="py-4 text-right text-[11px] sm:text-sm px-2">
                  1
                </td>
                <td className="py-4 text-right text-[11px] sm:text-sm">
                  ${printedData?.amount}
                </td>
                <td className="py-4 text-right text-[11px] sm:text-sm font-semibold">
                  ${printedData?.amount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary Area */}
        <div className="flex justify-end mt-4">
          <div className="w-full sm:w-64">
            <div className="flex justify-between py-2 border-b">
              <span className="text-xs sm:text-sm text-gray-600">
                Subtotal:
              </span>
              <span className="text-xs sm:text-sm font-semibold">
                ${printedData?.amount}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-xs sm:text-sm text-gray-600">
                Tax (0%):
              </span>
              <span className="text-xs sm:text-sm font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between py-3 mt-1 bg-gray-50 px-2">
              <span className="text-xs sm:text-sm font-bold">Total:</span>
              <span className="font-bold text-sm sm:text-lg text-blue-700">
                ${printedData?.amount}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center border-t pt-6">
          <p className="text-xs sm:text-sm font-semibold">
            Thank you for your business!
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
            This is a computer generated invoice and needs no signature.
          </p>
        </div>
      </div>
    </>
  );
};
