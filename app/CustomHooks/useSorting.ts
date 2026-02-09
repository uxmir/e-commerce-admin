import { useState, useMemo } from "react";
export const useSorting = (data: any[]) => {
  const [sorting, setSorting] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const sortedData = useMemo(() => {
    if (!sorting) return data;
    return [...data].sort((a, b) => {
      let aValue = a[sorting.key];
      let bValue = b[sorting.key];
      //for number value to make as a string in sorting
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        aValue = aNum;
        bValue = bNum;
      }
      if (aValue < bValue) return sorting.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sorting.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sorting]);
  //for sorting data table
  const handleSort = (key: string, direction: "asc" | "desc") => {
    setSorting({ key, direction });
  };
  return {
    sorting,
    sortedData,
    handleSort,
  };
};
