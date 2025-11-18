"use client";

import Link from "next/link";
import type { NavbarRoute } from "./types";
import { cn } from "@/utils";
import { ReactNode, useMemo } from "react";
import {
  Clan,
  Community,
  Drawings,
  Missions,
  Offers,
  Rewards,
  Store,
} from "@/components/icons";

interface NavbarRouteProps {
  route: NavbarRoute;
  isActive: boolean;
}

export default function NavbarRoute({ route, isActive }: NavbarRouteProps) {
  const { to, title, name } = route;

  const icon = useMemo(() => {
    const icons: Record<string, ReactNode> = {
      offers: (
        <Offers className={cn("text-grey-light", isActive && "text-white")} />
      ),
      store: (
        <Store className={cn("text-grey-light", isActive && "text-white")} />
      ),
      missions: (
        <Missions className={cn("text-grey-light", isActive && "text-white")} />
      ),
      rewards: (
        <Rewards className={cn("text-grey-light", isActive && "text-white")} />
      ),
      community: (
        <Community
          className={cn("text-grey-light", isActive && "text-white")}
        />
      ),
      drawings: (
        <Drawings className={cn("text-grey-light", isActive && "text-white")} />
      ),
      clan: (
        <Clan className={cn("text-grey-light", isActive && "text-white")} />
      ),
    };

    return icons[name];
  }, [name, isActive]);

  return (
    <Link
      href={to}
      className={cn(
        "flex w-full items-center gap-x-6 rounded-2xl bg-transparent px-5 py-4",
        isActive &&
          "bg-white/10 bg-[url(/components/route-item_active.png)] bg-left bg-no-repeat",
      )}
    >
      {icon}
      <span
        className={cn(
          "font-inter text-grey-light text-base font-medium",
          isActive && "text-white",
        )}
      >
        {title}
      </span>
    </Link>
  );
}
