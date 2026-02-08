"use client"
import TableComponent from "@/app/components/ui/DataTable/TableComponent";
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import Card from "@/app/components/ui/OverviewCard/Card";
import { PiIcon, ShoppingCart } from "lucide-react";
import React from "react";
const page: React.FC = () => {
  return (
    <div className="">
      <Heading headingValue="dashboard overview" />
      {/*========dashboardoverview========*/}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card
        title="Total Order"
        total_amount={120.00}
        Icon={ShoppingCart}
        container_color="bg-[#DDEDFF]"
        body_text_color="text-gray-700"
        icon_color="text-white bg-[#28629C]"
        border_color="border-[#28629C]"
        />
        <Card
        title="Completed Order"
        total_amount={120.00}
        Icon={ShoppingCart}
        container_color="bg-[#D2F6D6]"
        body_text_color="text-gray-700"
        icon_color="text-white bg-[#289C36]"
        border_color="border-[#289C36]"
        />
        <Card
        title="Pending Order"
        total_amount={120.00}
        Icon={ShoppingCart}
        container_color="bg-[#F8E8BD]"
        body_text_color="text-gray-700"
        icon_color="text-white bg-[#9C7D28]"
        border_color="border-[#9C7D28]"
        />
        <Card
        title="Cancelled Order"
        total_amount={120.00}
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
          <OverviewTable/>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
        </div>
      </div>
    </div>
  );
};

export default page;
interface dataProps{
  name:string;
  price:string;
  status:string
}
const OverviewTable=()=>{
  const tableColumns=[
    {
      header:"Name",
      key:"name"
    },
        {
      header:"Price",
      key:"price"
    },
        {
      header:"Status",
      key:"status"
    },
         {
      header:"Actions",
      key:{PiIcon}
    }
  ]
  const tableData=[
    {
      name:"Mir monir",
      price:'120.00',
      status:'active'
    },
        {
      name:"Mir monir",
      price:'120.00',
      status:'active'
    },
        {
      name:"Mir monir",
      price:'120.00',
      status:'active'
    },
        {
      name:"Mir monir",
      price:'120.00',
      status:'active'
    },
  ]
  return(
    <>
    {/* <TableComponent columns={tableColumns} data={tableData}/> */}

    </>
  )
}