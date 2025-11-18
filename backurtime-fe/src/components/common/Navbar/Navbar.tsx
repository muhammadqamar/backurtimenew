"use client";

import { Help } from "@/components/icons";
import Link from "next/link";
import { NAVBAR_ROUTES } from "./routes";
import { usePathname } from "next/navigation";
import NavbarRoute from "./Route";
import { useMemo } from "react";
import LogoHeading from "../LogoHeading";

export default function Navbar() {
  const pathname = usePathname();

  const currentRoute = useMemo(() => {
    return pathname.split("/").filter(Boolean)[1] || "offers";
  }, [pathname]);

  return (
    <div className="bg-dark-normal fixed top-0 left-0 flex min-h-dvh w-[280px] flex-col justify-between rounded-r-[40px] px-6 py-8">
      <div className="flex w-full flex-col gap-y-[142px]">
        <LogoHeading />
        <div className="flex w-full flex-col gap-y-[14px]">
          {NAVBAR_ROUTES.map((r) => {
            const isActive = currentRoute === r.name;

            return <NavbarRoute key={r.id} isActive={isActive} route={r} />;
          })}
        </div>
      </div>
      <Link href="/dashboard" className="flex items-center gap-x-6">
        <Help />
        <span className="font-inter text-grey-light text-base font-medium">
          Help & Support
        </span>
      </Link>
    </div>
  );
}
