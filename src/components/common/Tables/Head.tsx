import React, { CSSProperties } from "react";
import { TableHead } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface HeadProps {
  icon?: React.ReactNode | string;
  className?: string;
  name: string | number;
  style?: CSSProperties | undefined;
}
const Head = ({ icon, name, className, style }: HeadProps) => {
  return (
    <TableHead style={style}>
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
