import React from "react";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import { TableData } from "./types";
import { cn } from "@/utils";
import { RowFactory } from "./Rows";
import Head from "./Head";

interface DataTableProps {
  table: TableData;
  rowsSpace?: string;
  isTableHeader?: boolean;
  className?: string;
}

export function DataTable({
  table,
  rowsSpace,
  isTableHeader = false,
  className,
}: DataTableProps) {
  return (
    <Table
      className={cn("border-separate", className)}
      style={{
        borderSpacing: `0 ${rowsSpace ?? "20px"}`,
      }}
    >
      <TableHeader className={!isTableHeader ? "hidden" : ""}>
        <TableRow>
          {table.columns.map((column, index) => (
            <Head
              key={index}
              name={column.header}
              className={cn(
                column.align === "center" && "text-center",
                column.align === "right" && "text-right",
              )}
              style={{ width: column.width }}
            />
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {table.rows.map((row) => (
          <RowFactory key={row.id} rowData={row} columns={table.columns} />
        ))}
      </TableBody>
    </Table>
  );
}
