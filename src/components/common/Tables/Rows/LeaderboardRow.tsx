import { TableRow, TableCell } from "@/components/ui/table";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Award } from "lucide-react";
import { ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";

interface LeaderboardRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function LeaderboardRow({ rowData, columns }: LeaderboardRowProps) {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 2:
        return "bg-gray-100 text-gray-800 border-gray-200";
      case 3:
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-blue-50 text-blue-700 border-blue-100";
    }
  };

  return (
    <TableRow className="transition-colors hover:bg-amber-50">
      {columns.map((column) => {
        const cell = rowData.cells[column.accessorKey];
        if (!cell) return <TableCell key={column.accessorKey}>-</TableCell>;

        switch (column.accessorKey) {
          case "rank":
            return (
              <TableCell key="rank" className="text-center">
                <div
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold",
                    getRankColor(Number(cell.value)),
                  )}
                >
                  #{cell.value}
                </div>
              </TableCell>
            );

          case "player":
            return (
              <TableCell key="player">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-amber-100 font-semibold text-amber-800">
                      {String(cell.value).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{cell.value}</p>
                    <p className="text-sm text-gray-500">
                      Level {rowData.cells.level?.value || 1}
                    </p>
                  </div>
                </div>
              </TableCell>
            );

          case "points":
            return (
              <TableCell key="points">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="text-lg font-bold">{cell.value}</span>
                  <span className="text-sm text-gray-500">pts</span>
                </div>
              </TableCell>
            );

          case "progress":
            const progress = parseInt(cell.value) || 0;
            return (
              <TableCell key="progress">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-green-600 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </TableCell>
            );

          default:
            return (
              <TableCell
                key={column.accessorKey}
                className={cell.className}
                onClick={cell.onClick}
              >
                {cell.value}
              </TableCell>
            );
        }
      })}
    </TableRow>
  );
}
