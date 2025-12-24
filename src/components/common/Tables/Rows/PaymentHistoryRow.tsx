import Image from "next/image";
import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";
import { isRenderCell } from "../type-guards";
import { Calender } from "@/components/icons";

interface PaymentHistoryRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function PaymentHistoryRow({
  rowData,
  columns,
}: PaymentHistoryRowProps) {
  return (
    <TableRow>
      {columns.map((column) => {
        const cell = rowData.cells[column.accessorKey];
        if (!cell || isRenderCell(cell)) {
          return <TableCell key={column.accessorKey}>-</TableCell>;
        }
        return (
          <TableCell key={column.accessorKey} className="py-5">
            <div className={cn("flex items-center gap-3 text-white")}>
              {column.accessorKey === "date" && <Calender />}
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
              <p className="font-inter flex items-center text-sm leading-[140%] font-medium tracking-[1%]">
                {cell.value}
              </p>
            </div>
          </TableCell>
        );
      })}
    </TableRow>
  );
}
