import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TableRow, TableCell } from "@/components/ui/table";
import { ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";
import { isRenderCell } from "../type-guards";
import { Drawings, PresentBox } from "@/components/icons";

interface CompletedHistoryItemRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function CompletedHistoryItemRow({
  rowData,
  columns,
}: CompletedHistoryItemRowProps) {
  return (
    <TableRow className="group">
      {columns.map((column) => {
        const cell = rowData.cells[column.accessorKey];
        if (!cell) {
          return (
            <TableCell
              key={column.accessorKey}
              className={cn(
                "bg-primitives-white_10 py-2 first:rounded-tl-2xl first:rounded-bl-2xl first:pl-3 last:rounded-tr-2xl last:rounded-br-2xl last:pr-3 sm:py-3 sm:first:pl-4 sm:last:pr-4",
              )}
            ></TableCell>
          );
        }
        if (isRenderCell(cell)) {
          return (
            <TableCell
              key={column.accessorKey}
              className={cn(
                "bg-primitives-white_10 py-2 first:rounded-tl-2xl first:rounded-bl-2xl first:pl-3 last:rounded-tr-2xl last:rounded-br-2xl last:pr-3 sm:py-3 sm:first:pl-4 sm:last:pr-4",
              )}
            >
              {cell.render()}
            </TableCell>
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

              {column.accessorKey === "prize" && <PresentBox size={20} />}
              {column.accessorKey === "tickets" && <Drawings size={20} />}
              {column.accessorKey === "time" && <Clock size={20} />}
              {column.accessorKey === "profile" ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  {cell.profileImage && (
                    <Avatar className="size-8 overflow-hidden rounded-full sm:size-10!">
                      <AvatarImage
                        src={
                          cell.profileImage || "https://github.com/shadcn.png"
                        }
                        alt={cell.value as string}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  )}
                  <span className="font-inter text-base leading-[150%] font-medium">
                    {cell.value}
                  </span>
                  {(cell.clanName || cell.clanIcon) && (
                    <div className="bg-primitives-white_10 flex items-center gap-2 rounded-[8px] px-2 py-1">
                      {cell.clanIcon && (
                        <Image
                          src={cell.clanIcon as string}
                          alt={cell.clanName as string}
                          width={20}
                          height={15}
                          className="shrink-0 object-contain"
                        />
                      )}
                      <p className="font-inter hidden text-base leading-[140%] font-normal sm:block">
                        {cell.clanName}
                      </p>
                    </div>
                  )}
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
