"use client";
import Badge from "@/app/components/ui/Badge/Badge";
import Button from "@/app/components/ui/Button/Button";
import TableComponent from "@/app/components/ui/DataTable/TableComponent";
import Drawer from "@/app/components/ui/Drawer/Drawer";
import Input from "@/app/components/ui/Input/Input";
import PaginationComponent from "@/app/components/ui/Pagination/PaginationComponent";
import { useAppDispatch, useAppSelector } from "@/app/CustomHooks/api";
import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import { useDrawer } from "@/app/CustomHooks/useDrawer";
import { usePagination } from "@/app/CustomHooks/usePaginaton";
import { fetchAllData } from "@/app/store/ProductSlice";
import { Products } from "@/app/types/product";
import { SquarePen, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
const page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.product);
  const { getStyle } = useColorStatus();
  const {
    drawerContainer,
    drawerOverlay,
    showDrawer,
    closeDrawer,
    showCreateDrawer,
    drawerConfig,
    selectedData,
  } = useDrawer(data);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  //filter logic
  const filteredData = useMemo(() => {
    if (!data) return [];
    return data?.filter(
      (d: Products) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.category.toLowerCase().includes(search.toLowerCase()) ||
        d.status.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const { currentPage, setCurrentPage, totalPage, paginatedData } =
    usePagination(filteredData);

  //table columns
  const tableColumns = [
    {
      header: "Name",
      key: "name",
      render: (row: any) => (
        <>
          <div className="flex gap-x-3 items-center">
            <div className="w-8 h-5 ">
              <Image
                src={row?.img}
                alt={`${row?.name}`}
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
            <span>{row?.name}</span>
          </div>
        </>
      ),
    },
    {
      header: "Category",
      key: "category",
    },
    {
      header: "price",
      key: "price",
    },
    {
      header: "Sale price",
      key: "sales_price",
    },
    {
      header: "Stock",
      key: "stock",
    },
    {
      header: "Status",
      key: "status",
      render: (row: any) => (
        <>
          <Badge color={`${getStyle(row.status)}`}>{row?.status}</Badge>
        </>
      ),
    },
    {
      header: "Actions",
      key: "action",
      render: (row: any) => (
        <>
          <div className="flex justify-end items-center gap-x-3">
            <SquarePen
              size={18}
              onClick={() => showDrawer(row?.id, "edit")}
              className="cursor-pointer text-blue-600"
            />
            <Trash size={18} className="cursor-pointer text-red-600" />
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-y-6 sm:flex-row justify-between items-center w-full mt-10 mb-6">
        <div className=" w-full sm:w-[300px]">
          <Input
            inputType="text"
            inputName="search"
            placeholder="Filter By Name or Category or Status"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>
        <Button buttonType="button" onEvent={() => showCreateDrawer("create")}>
          Add Product
        </Button>
      </div>
      <div>
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
      </div>
      {/* =====drawerSection======*/}
      <Drawer
        position="right"
        width="w-3/4 sm:w-1/2"
        overlay={drawerOverlay}
        container={drawerContainer}
        close={closeDrawer}
      >
        {drawerConfig === "create" ? (
          <CreateForm close={closeDrawer} />
        ) : (
          <>
            <EditForm
              values={(() => {
                const data = selectedData;
                return {
                  name: data?.name ?? "",
                  img: data?.img ?? (null as File | string | null),
                  category: data?.category ?? "",
                  price: data?.price ?? 0,
                  sales_price: data?.sales_price ?? 0,
                  stock: data?.stock ?? 0,
                  status: data?.status ?? "",
                };
              })()}
              close={closeDrawer}
            />
          </>
        )}
      </Drawer>
    </div>
  );
};

export default page;
