"use client";
import TableComponent from "@/app/components/ui/DataTable/TableComponent";
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import Card from "@/app/components/ui/OverviewCard/Card";
import { Edit, ShoppingCart } from "lucide-react";
import React from "react";
import { usePagination } from "@/app/CustomHooks/usePaginaton";
import PaginationComponent from "@/app/components/ui/Pagination/PaginationComponent";
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
// interface dataProps {
//   name: string;
//   price: string;
//   status: string;
// }
const OverviewTable: React.FC = () => {
  const tableColumns = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Price",
      key: "price",
    },
    {
      header: "Date",
      key: "date",
    },
    {
      header: "Status",
      key: "status",
    },
    {
      header: "Actions",
      key: "action",
      render: (row: any) => (
        <div className="flex justify-end items-center gap-x-2">
             <Edit size={16} />
        </div>
      ),
    },
  ];
  const tableData = [
    {
      id: 1,
      name: "Abdur Rahman",
      price: "450.50",
      status: "active",
      category: "Electronics",
      date: "2024-03-10",
    },
    {
      id: 2,
      name: "Mir Monir",
      price: "120.00",
      status: "pending",
      category: "Gadgets",
      date: "2024-03-05",
    },
    {
      id: 3,
      name: "Sabbir Ahmed",
      price: "2500.00",
      status: "active",
      category: "Home Decor",
      date: "2024-03-15",
    },
    {
      id: 4,
      name: "Zayan Malik",
      price: "75.25",
      status: "inactive",
      category: "Stationary",
      date: "2024-02-28",
    },
    {
      id: 5,
      name: "Jannatul Fardous",
      price: "1250.00",
      status: "active",
      category: "Fashion",
      date: "2024-01-20",
    },
    {
      id: 6,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 6,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 7,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 8,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 9,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 10,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 11,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 12,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 13,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
    {
      id: 14,
      name: "Ariful Islam",
      price: "320.00",
      status: "pending",
      category: "Books",
      date: "2024-03-01",
    },
  ];
  const { paginatedData, totalPage, currentPage, setCurrentPage } =
    usePagination(tableData);
  return (
    <>
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
      {/* details drawer*/}
    </>
  );
};
