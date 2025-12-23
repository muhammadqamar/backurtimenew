// components/rows/BaseRow.tsx
import { TableRow, TableCell } from "@/components/ui/table";

import { ExternalLink } from "lucide-react";
import { CellData, ColumnConfig, RowData } from "../types";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

interface BaseRowProps {
  rowData: RowData;
  columns: ColumnConfig[];
  rowClassName?: string;
  onRowClick?: () => void;
  onCellClick?: (columnKey: string, cell: CellData) => void;
  onIconClick?: (columnKey: string, cell: CellData) => void;
}

export function BaseRow({
  rowData,
  columns,
  rowClassName = "",
  onRowClick,
  onCellClick,
  onIconClick,
}: BaseRowProps) {
  // Handle row click
  const handleRowClick = (e: React.MouseEvent) => {
    // Don't trigger row click if clicking on a button or interactive element
    const target = e.target as HTMLElement;
    const isInteractiveElement =
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a");

    if (isInteractiveElement) {
      e.stopPropagation();
      return;
    }

    if (rowData.href) {
      window.open(rowData.href as string, rowData.target || "_self");
    } else if (rowData.onClick) {
      e.stopPropagation();
      rowData.onClick();
    } else if (onRowClick) {
      e.stopPropagation();
      onRowClick();
    }
  };

  // Handle cell click
  const handleCellClick = (
    cell: CellData,
    columnKey: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();

    // Don't trigger if clicking on icon or interactive element within cell
    const target = e.target as HTMLElement;
    if (target.tagName === "BUTTON" || target.closest("button")) {
      return;
    }

    if (cell.href) {
      window.open(cell.href as string, cell.target || "_self");
    } else if (cell.onClick) {
      cell.onClick();
    } else if (onCellClick) {
      onCellClick(columnKey, cell);
    }
  };

  // Handle icon click
  const handleIconClick = (
    cell: CellData,
    columnKey: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();

    if (cell.iconOnClick) {
      cell.iconOnClick();
    } else if (onIconClick) {
      onIconClick(columnKey, cell);
    }
  };

  // Check if URL is internal (Next.js route)
  const isInternalUrl = (url: string) => {
    return (
      url.startsWith("/") &&
      !url.startsWith("http://") &&
      !url.startsWith("https://") &&
      !url.startsWith("mailto:") &&
      !url.startsWith("tel:")
    );
  };

  // Render cell content
  const renderCellContent = (cell: CellData, columnKey: string) => {
    // If cell has a render function, use it
    if (isRenderCell(cell)) {
      return cell.render();
    }

    const isClickable = cell.onClick || cell.href || onCellClick;
    const hasIconClick = cell.iconOnClick || onIconClick;

    return (
      <div
        className={cn(
          "font-inter flex items-center gap-3 text-sm leading-[140%] font-medium tracking-[1%] text-white",
          cell.className,
          isClickable && "cursor-pointer",
          !!cell.href && "text-blue-300 hover:text-blue-200",
        )}
      >
        {/* Icon with click handler */}
        {cell.icon && (
          <button
            type="button"
            // variant="ghost"
            // size="icon"
            className={cn(
              "h-6 w-6 p-0 hover:bg-white/20",
              hasIconClick ? "cursor-pointer" : "cursor-default opacity-50",
            )}
            onClick={(e) => handleIconClick(cell, columnKey, e)}
            disabled={!hasIconClick}
            aria-label="Icon"
          >
            {cell.icon}
          </button>
        )}

        {/* Cell value - could be link or plain text */}
        {cell.href ? (
          isInternalUrl(cell.href as string) ? (
            <Link
              href={cell.href}
              className="flex items-center gap-1 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {cell.value}
            </Link>
          ) : (
            <a
              href={cell.href as string}
              target={cell.target}
              rel={cell.target === "_blank" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {cell.value}
              {cell.target === "_blank" && (
                <ExternalLink className="ml-1 h-3 w-3" />
              )}
            </a>
          )
        ) : (
          <span className="flex-1">{cell.value}</span>
        )}
      </div>
    );
  };

  // Check if row is clickable
  const isRowClickable = rowData.onClick || rowData.href || onRowClick;

  return (
    <TableRow
      className={cn(
        "group transition-colors",
        rowClassName,
        isRowClickable && "cursor-pointer hover:bg-white/10",
      )}
      onClick={handleRowClick}
    >
      {columns.map((column) => {
        const cell = rowData.cells[column.accessorKey];
        if (!cell) return <TableCell key={column.accessorKey}>-</TableCell>;

        const isCellClickable = cell.onClick || cell.href || onCellClick;

        // Special handling for render cells (like actions column)
        if (isRenderCell(cell)) {
          return (
            <TableCell
              key={column.accessorKey}
              className="py-4"
              onClick={(e) => e.stopPropagation()} // Prevent row clicks on action cells
            >
              {renderCellContent(cell, column.accessorKey)}
            </TableCell>
          );
        }

        // Regular cells with click handlers
        return (
          <TableCell
            key={column.accessorKey}
            className={cn(
              "py-4",
              column.align === "center" && "text-center",
              column.align === "right" && "text-right",
              column.accessorKey === "date" && "text-gray-300",
              isCellClickable && "cursor-pointer",
            )}
            onClick={(e) => {
              if (isCellClickable) handleCellClick(cell, column.accessorKey, e);
            }}
          >
            {renderCellContent(cell, column.accessorKey)}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

// Type guard utility
// utils/type-guards.ts
export function isRenderCell(
  cell: CellData,
): cell is CellData & { render: () => React.ReactNode } {
  return (
    "render" in cell &&
    typeof (cell as CellData & { render?: unknown }).render === "function"
  );
}
