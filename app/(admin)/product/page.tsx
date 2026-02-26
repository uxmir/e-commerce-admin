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
import Dialog from "@/app/components/ui/Dialog/Dialog";
import { useDialogDelete } from "@/app/CustomHooks/useDialogDelete";
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

  //for delete logic
  const { dialog, showDialog, closeDialog, deleteData } = useDialogDelete(data);
  //handle delete
  const handleConfirmDelete = (value: number) => {
    //api is here
    console.log(value);
  };
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
            <Trash
              onClick={() => showDialog(row?.id)}
              size={18}
              className="cursor-pointer text-red-600"
            />
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
      {/* =====delete dialog====*/}
     {dialog && (
  <Dialog width=" w-[290px] sm:w-[550px]" close={closeDialog}>
    {/* Main Container: Light mode-e white ebong Dark mode-e slate-900 */}
    <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xl transition-all">
      
      {/* Icon & Title Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
          <svg 
            className="w-6 h-6 text-red-600 dark:text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Are you sure?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          This action cannot be undone. All data will be permanently removed.
        </p>
      </div>
            <div className="flex gap-3 flex-col sm:flex-row w-full">
            <Button
            buttonType="button"
            customClass="flex-1 px-4 py-2 text-sm font-medium !text-gray-700 dark:!text-gray-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            onEvent={closeDialog}
          >
            Cancell
          </Button>
          <Button
            buttonType="button"
            width="w-full flex-1" 
            onEvent={() => handleConfirmDelete(deleteData)}
          >
            Confirm Delete
          </Button>
        </div>
    </div>
  </Dialog>
)}
    </div>
  );
};

export default page;
