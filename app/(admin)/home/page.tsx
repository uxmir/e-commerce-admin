"use client"
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import Card from "@/app/components/ui/OverviewCard/Card";
import { PiIcon } from "lucide-react";
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
        Icon={PiIcon}
        container_color="bg-[#DDEDFF]"
        
        />
      </div>
    </div>
  );
};

export default page;
