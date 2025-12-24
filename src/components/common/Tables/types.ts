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
  value: string | number | boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  iconOnClick?: () => void;
  href?: unknown;
  target?: string;
  profileImage?: string;
  clanName?: string;
  render?: (params: { row: RowData }) => React.ReactNode;
  clanIcon?: string;
}

export interface RenderCellData extends CellData {
  render: () => React.ReactNode;
}

export type TableCellData = CellData | RenderCellData;

export interface RowData {
  id: string;
  type: TableRowType;
  cells: Record<string, TableCellData>;
  rowClassName?: string;
  onClick?: () => void;
  href?: unknown;
  target?: string;
  meta?: {
    [key: string]: unknown;
  };
}

export interface TableData {
  id: string;
  type: TableRowType;
  columns: ColumnConfig[];
  rows: RowData[];
  title?: string;
  description?: string;
}

export type RowActionState = "chat" | "delete" | "edit" | "add";
