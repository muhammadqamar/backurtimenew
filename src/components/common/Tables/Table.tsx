import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { RowData, TableData } from "./types";
import {
  CompletedHistoryItemRow,
  DrawsItemRow,
  LeaderboardRow,
  MembersItemRow,
  PaymentHistoryRow,
  RewardRow,
  RewardsRow,
} from "./Rows";
import Head from "./Head";
import React, { Fragment } from "react";

interface DataTableProps {
  table: TableData;
  className?: string;
}

export function DataTable({ table, className }: DataTableProps) {
  const renderRow = (rowData: RowData) => {
    const commonProps = {
      rowData,
      columns: table.columns,
      tableType: table.type,
    };

    switch (rowData.type) {
      case "payment-history":
        return <PaymentHistoryRow {...commonProps} />;
      case "leaderboard":
        return <LeaderboardRow {...commonProps} />;
      // case "draws-item":
      //   return <DrawsItemRow {...commonProps} />;
      // case "reward":
      //   return <RewardRow {...commonProps} />;
      // case "members-item":
      //   return <MembersItemRow {...commonProps} />;
      // case "completed-history-item":
      //   return <CompletedHistoryItemRow {...commonProps} />;
      // case "rewards":
      //   return <RewardsRow {...commonProps} />;
      default:
        return <PaymentHistoryRow {...commonProps} />;
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {(table.title || table.type) && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold capitalize">
            {table.title || table.type.replace("-", " ")}
          </h2>
          {table.description && (
            <p className="mt-2 text-gray-500">{table.description}</p>
          )}
        </div>
      )}

      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {table.columns.map((column, index) => (
                <Head key={index} name={column.header} />
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row) => (
              <Fragment key={row.id}>{renderRow(row)}</Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
