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

      // sorting for date value
      const isDate = (val: string) =>
        typeof val === "string" && !isNaN(Date.parse(val)) && val.includes("-");
      if (isDate(aValue) && isDate(bValue)) {
        const aDate = new Date(aValue).getTime();
        const bDate = new Date(bValue).getTime();
        return sorting.direction === "asc" ? aDate - bDate : bDate - aDate;
      }
      //for number value to make as a string in sorting
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sorting.direction === "asc" ? aNum - bNum : bNum - aNum;
      }
      //string sorting
      const aStr = String(aValue).toLowerCase().trim();
      const bStr = String(bValue).toLowerCase().trim();
      if (aStr < bStr) return sorting.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sorting.direction === "asc" ? 1 : -1;
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
