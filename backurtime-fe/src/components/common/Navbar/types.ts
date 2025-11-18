import type { Route } from "next";

export interface NavbarRoute {
  id: string;
  title: string;
  name: string;
  to: Route;
}
