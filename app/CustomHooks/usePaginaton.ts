import { useMemo, useState } from "react";
export const usePagination = (allData: any[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const totalPage = Math.ceil(allData.length / rowPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
   return allData?.slice(startIndex, endIndex);
  }, [allData, currentPage, rowPerPage]);

  return {
    allData,
    currentPage,
    setCurrentPage,
    rowPerPage,
    totalPage,
    paginatedData,
  };
};
