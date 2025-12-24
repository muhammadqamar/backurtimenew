import { TableRow, TableCell } from "@/components/ui/table";

import { ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";
import { isRenderCell } from "../type-guards";
import Image from "next/image";
import React from "react";
import { Drawings, PresentBox } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock } from "lucide-react";

interface DrawsItemRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function RewardsRow({ rowData, columns }: DrawsItemRowProps) {
  return (
    <TableRow className="group">
      {columns.map((column) => {
        const cell = rowData.cells[column.accessorKey];
        if (!cell || isRenderCell(cell)) {
          return (
            <TableCell
              key={column.accessorKey}
              className={cn(
                "bg-primitives-white_10 py-2 first:rounded-tl-2xl first:rounded-bl-2xl first:pl-3 last:rounded-tr-2xl last:rounded-br-2xl last:pr-3 sm:py-3 sm:first:pl-4 sm:last:pr-4",
              )}
            ></TableCell>
          );
        }
        return (
          <TableCell
            key={column.accessorKey}
            className={cn(
              "bg-primitives-white_10 py-2 first:rounded-tl-2xl first:rounded-bl-2xl first:pl-3 last:rounded-tr-2xl last:rounded-br-2xl last:pr-3 sm:py-3 sm:first:pl-4 sm:last:pr-4",
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2 text-white sm:gap-3",
                cell.className,
              )}
            >
              {column.accessorKey !== "profile" && (
                <>
                  {typeof cell.icon === "string" && (
                    <Image
                      src={cell.icon as string}
                      alt={cell.value as string}
                      width={20}
                      height={20}
                      className="shrink-0 object-contain"
                    />
                  )}
                  {React.isValidElement(cell.icon) && cell.icon}
                </>
              )}
              {column.accessorKey === "prize" && <PresentBox size={20} />}
              {column.accessorKey === "tickets" && <Drawings size={20} />}
              {column.accessorKey === "time" && <Clock size={20} />}
              {column.accessorKey === "profile" ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  <Avatar className="size-8 overflow-hidden rounded-full sm:size-10!">
                    <AvatarImage
                      src={cell.profileImage || "https://github.com/shadcn.png"}
                      alt={cell.value as string}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-inter text-base leading-[150%] font-medium">
                    {cell.value}
                  </span>
                  <div className="bg-primitives-white_10 flex items-center gap-2 rounded-[8px] px-2 py-1">
                    <Image
                      src={cell.icon as string}
                      alt={cell.value as string}
                      width={20}
                      height={15}
                      className="shrink-0 object-contain"
                    />
                    <p className="font-inter hidden text-base leading-[140%] font-normal sm:block">
                      {cell.clanName}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="font-inter flex items-center text-base leading-[150%] font-medium">
                  {cell.value}
                </p>
              )}
            </div>
          </TableCell>
        );
      })}
    </TableRow>
  );
}
