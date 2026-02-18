import { Check, ChevronsUpDown, SortAscIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../DataTable/Table";
import { useState } from "react";
import { useSorting } from "@/app/CustomHooks/useSorting";

interface tableColumns {
  header: string;
  key: any;
  render?: (row: any) => React.ReactNode;
}
interface tableProps {
  columns: tableColumns[];
  data: any[];
  sortIcon?: boolean;
}
const TableComponent: React.FC<tableProps> = ({
  data,
  columns,
  sortIcon,
}) => {
  const { sortedData, sorting, handleSort } = useSorting(data);
  const [isSorting, setIsSorting] = useState<string | null>(null);
  const [check, setCheck] = useState<string | null>(null);
  const [catchKey, setCatchKey] = useState<string | null>(null);
  const handleSortContainer = (val: string) => {
    setIsSorting(val);
    if (isSorting?.includes(val)) {
      setIsSorting("");
    } else {
      setIsSorting(val);
    }
  };
  const handleSortSystem = (val: string, key: string) => {
    setCheck(val);
    setCatchKey(key);
  };
  return (
    <>
      <Table className="">
        <TableHeader className="bg-blue-100 dark:bg-[#33304E] [&_tr]:border-b-0">
          <TableRow className="border-0 text-gray-600 dark:text-white capitalize">
            {columns?.map((col, index) => (
              <TableHead
                className={` px-5 py-3 text-sm sm:text-base capitalize font-medium `}
                key={index}
              >
                <div className="relative">
                  <div
                    className={`flex  gap-x-2 items-center ${index === columns.length - 1 ? "justify-end" : ""}`}
                  >
                    <span>{col.header}</span>
                    {sortIcon === true && col.key !== "action" && (
                      <ChevronsUpDown
                        onClick={() => handleSortContainer(col.key)}
                        size={16}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  {isSorting === col.key && (
                    <div className=" py-3 px-3 bg-white shadow-md rounded flex flex-col gap-y-2 left-5 absolute top-6 z-50">
                      <div className="flex items-center gap-x-2">
                        <div className="w-4">
                          {check === "asc" && catchKey === col.key && (
                            <Check size={14} className="text-blue-800" />
                          )}
                        </div>
                        <span
                          onClick={() => {
                            handleSortSystem("asc", col.key);
                            handleSort(col.key, "asc");
                          }}
                          className="text-blue-800 cursor-pointer"
                        >
                          Asending
                        </span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <div className="w-4">
                          {check === "desc" && catchKey === col.key && (
                            <Check size={14} className="text-blue-800" />
                          )}
                        </div>
                        <span
                          onClick={() => {
                            handleSortSystem("desc", col.key);
                            handleSort(col.key, "desc");
                          }}
                          className="text-blue-800 cursor-pointer"
                        >
                          Desending
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {sortedData?.length > 0 ? (
            sortedData?.map((row, index) => (
              <TableRow
                key={index}
                className={` bg-white dark:bg-[#1a163d] text-gray-600 dark:text-white capitalize hover:bg-gray-50   dark:hover:bg-transparent border-gray-200 dark:border-gray-400 ${index === sortedData.length - 1 ? "border-0" : "border-b"}`}
              >
                {columns?.map((col, index) => (
                  <TableCell
                    className={` px-5 py-3  text-sm sm:text-base capitalize  ${index === columns.length - 1 ? "text-end" : ""}`}
                    key={index}
                  >
                    {col.render ? col.render(row) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Data Not Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
export default TableComponent;
