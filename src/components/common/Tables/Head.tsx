import { TableHead, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

interface HeadProps {
  icon?: React.ReactNode | string;
  className?: string;
  name: string | number;
}
const Head = ({ icon, name, className }: HeadProps) => {
  return (
    <TableHead>
      <div
        className={cn(
          "font-inter text-grey-light flex items-center gap-3 text-base leading-[140%] font-normal tracking-[1%]",
          className,
        )}
      >
        {name}
        {icon}
      </div>
    </TableHead>
  );
};

export default Head;
