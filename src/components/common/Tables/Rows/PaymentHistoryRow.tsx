// rows/BaseRow.tsx - Reusable base component

import { ColumnConfig, RowData } from "../types";

import { BaseRow } from "./BaseRow";

interface PaymentHistoryRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

// Simplified PaymentHistoryRow using BaseRow
export function PaymentHistoryRow({
  rowData,
  columns,
}: PaymentHistoryRowProps) {
  return (
    <BaseRow
      rowData={rowData}
      columns={columns}
      rowClassName="hover:bg-white/10"
    />
  );
}

export function LeaderboardRowSimple({
  rowData,
  columns,
}: PaymentHistoryRowProps) {
  return (
    <BaseRow
      rowData={rowData}
      columns={columns}
      rowClassName="hover:bg-amber-50"
    />
  );
}
