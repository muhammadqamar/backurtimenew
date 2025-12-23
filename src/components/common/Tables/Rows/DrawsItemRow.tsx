import { TableRow, TableCell } from "@/components/ui/table";

import { Gift, Users, Clock } from "lucide-react";
import { CellData, ColumnConfig } from "../types";

interface DrawsItemRowProps {
  data: CellData & { [key: string]: any };
  columns: ColumnConfig[];
  index: number;
}

export function DrawsItemRow({ data, columns, index }: DrawsItemRowProps) {
  return (
    <TableRow className="transition-colors hover:bg-purple-100">
      {columns.map((column) => {
        const value = data[column.accessorKey as string];

        switch (column.accessorKey) {
          case "draw":
            return (
              <TableCell key="draw">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <Gift className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{value}</p>
                    <p className="text-sm text-gray-500">Draw #{data.drawId}</p>
                  </div>
                </div>
              </TableCell>
            );

          case "prize":
            return (
              <TableCell key="prize" className="font-bold text-purple-700">
                {value}
              </TableCell>
            );

          case "entries":
            return (
              <TableCell key="entries">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span>{value}</span>
                  <span className="text-sm text-gray-500">entries</span>
                </div>
              </TableCell>
            );

          case "time":
            return (
              <TableCell key="time">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{value}</span>
                </div>
              </TableCell>
            );

          case "action":
            return <TableCell key="action"></TableCell>;

          default:
            return <TableCell key={column.accessorKey}>{value}</TableCell>;
        }
      })}
    </TableRow>
  );
}
