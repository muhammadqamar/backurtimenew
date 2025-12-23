import { LinkProps } from "next/link";
import { ReactElement } from "react";

export type TableRowType =
  | "leaderboard"
  | "payment-history"
  | "draws-item"
  | "reward"
  | "members-item"
  | "completed-history-item"
  | "rewards";

export interface ColumnConfig {
  header: string;
  accessorKey: string;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface CellData {
  value?: string | number | undefined;
  className?: string;
  icon?: string | React.ReactNode;
  onClick?: () => void;
  iconOnClick?: () => void;
  href?: unknown;
  target?: string;
}

export interface RenderCellData extends CellData {
  render: () => React.ReactNode;
  value?: string | number;
}

export type TableCellData = CellData | RenderCellData;

// Helper type guard
export function isRenderCell(cell: TableCellData): cell is RenderCellData {
  return "render" in cell && typeof cell.render === "function";
}

// Update RowData interface
export interface RowData {
  id: string;
  type: TableRowType;
  cells: Record<string, TableCellData>;
  rowClassName?: string;
  onClick?: () => void;
  href?: unknown;
  target?: string;
}
export interface TableData {
  id: string;
  type: TableRowType;
  title?: string;
  description?: string;
  columns: ColumnConfig[];
  rows: RowData[]; // Changed from 'data' to 'rows' for clarity
}
