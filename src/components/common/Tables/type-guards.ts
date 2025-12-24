import { RenderCellData, TableCellData } from "./types";

export function isRenderCell(cell: TableCellData): cell is RenderCellData {
  return (
    "render" in cell && typeof (cell as RenderCellData).render === "function"
  );
}

export function isActionsCell(accessorKey: string): boolean {
  return accessorKey.toLowerCase().includes("action");
}
