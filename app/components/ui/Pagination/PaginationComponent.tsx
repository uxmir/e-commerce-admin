"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
interface paginationProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage:(e:any)=>void
}
const PaginationComponent: React.FC<paginationProps> = ({ totalPage,currentPage,setCurrentPage }) => {
  return (
    <div className="flex justify-end my-4 text-gray-600 dark:text-white">
      <Pagination className="cursor-pointer">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e: any) => {
                e.preventDefault();
                if (currentPage > 1)  setCurrentPage(currentPage - 1);
              }}
            />
          </PaginationItem>
          {[...Array(totalPage)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={index===currentPage-1}
                onClick={(e: any) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationNext
            onClick={(e: any) => {
              e.preventDefault();
              if (currentPage < totalPage)
               setCurrentPage(currentPage + 1);
            }}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
