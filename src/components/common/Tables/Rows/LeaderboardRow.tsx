import React from "react";
import Image from "next/image";
import { AvatarImage } from "@radix-ui/react-avatar";
import { TableRow, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";
import { isRenderCell } from "../type-guards";
import { Time } from "@/components/icons";

interface LeaderboardRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function LeaderboardRow({ rowData, columns }: LeaderboardRowProps) {
  return (
    <TableRow className="group">
      {columns.map((column) => {
        const cell = rowData.cells[column.accessorKey];
        if (!cell || isRenderCell(cell)) {
          return (
            <TableCell
              key={column.accessorKey}
              className={cn(
                "py-2 first:rounded-tl-full first:rounded-bl-full first:pl-4 last:rounded-tr-full last:rounded-br-full last:pr-4",
                "group-hover:bg-primitives-white_10",
              )}
            ></TableCell>
          );
        }
        return (
          <TableCell
            key={column.accessorKey}
            className={cn(
              "py-2 first:rounded-tl-full first:rounded-bl-full first:pl-4 last:rounded-tr-full last:rounded-br-full last:pr-4",
              "group-hover:bg-primitives-white_10",
            )}
          >
            <div
              className={cn(
                "flex items-center gap-3 text-white",
                column.accessorKey === "tag" && "gap-1",
                column.accessorKey === "otherClans" && "gap-2",
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
              {column.accessorKey === "tag" && <Time size={16} />}
              {column.accessorKey === "profile" ? (
                <div className="flex items-center gap-2">
                  <Avatar className="ml-1 h-8 w-8">
                    <AvatarImage
                      src={cell.profileImage || "https://github.com/shadcn.png"}
                      alt={cell.value as string}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-inter text-base leading-[150%] font-medium">
                    {cell.value}
                  </span>

                  <Image
                    src={"/icons/fire.svg"}
                    alt={cell.value as string}
                    width={18}
                    height={18}
                    className="shrink-0 object-contain"
                  />
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
