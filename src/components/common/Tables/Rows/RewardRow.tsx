import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TableRow, TableCell } from "@/components/ui/table";
import { ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";
import { isRenderCell } from "../type-guards";
import { Pazzle } from "@/components/icons";

interface RewardRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function RewardRow({ rowData, columns }: RewardRowProps) {
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

              {column.accessorKey === "status" && (
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/icons/medallions-gold.svg"}
                      alt={cell.value as string}
                      width={32}
                      height={32}
                      className="drop-shadow-medallions-gold size-6! shrink-0 object-contain sm:size-8!"
                    />
                    <span className="font-inter text-[12px] leading-[140%]! font-medium tracking-[1%]! sm:text-sm!">
                      Sign up
                    </span>
                  </div>
                  <span className="border-primitives-white_30 h-[1.2px] w-[49px] border-[1.2px] border-dashed [dashes:2,3]" />
                  <div className="flex items-center gap-2">
                    <Image
                      src={
                        cell.value === "completed"
                          ? "/icons/medallions-gold.svg"
                          : "/icons/medallions-grey.svg"
                      }
                      alt={cell.value as string}
                      width={32}
                      height={32}
                      className="size-6! shrink-0 object-contain sm:size-8!"
                    />
                    <span
                      className={cn(
                        "font-inter text-[12px] leading-[140%]! font-medium tracking-[1%]! sm:text-sm!",
                        cell.value !== "completed" && "text-grey-input",
                      )}
                    >
                      Complete fisrt offer
                    </span>
                  </div>
                </div>
              )}
              {column.accessorKey === "items" && <Pazzle size={20} />}
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
                </div>
              ) : (
                column.accessorKey !== "status" && (
                  <p className="font-inter flex items-center text-base leading-[150%] font-medium">
                    {cell.value}
                  </p>
                )
              )}
            </div>
          </TableCell>
        );
      })}
    </TableRow>
  );
}
