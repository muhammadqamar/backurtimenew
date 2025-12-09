"use client";
import { Navbar } from "@/components/common";
import Header from "@/components/common/Header";
import { usePathname } from "next/navigation";

type PageConfig = {
  [path: string]: {
    name: string;
    bg: string;
  };
};

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  const pathname = usePathname();
  console.log(pathname);
  const pageConfig: PageConfig = {
    "/": {
      name: "Home",
      bg: "/images/home-bg.jpg",
    },
    "/about": {
      name: "About Us",
      bg: "/images/about-bg.jpg",
    },
    "/dashboard/offers": {
      name: "Offers",
      bg: "/pages/profile/avatar_podium.webp",
    },
    "/dashboard/settings": {
      name: "Settings",
      bg: "/images/settings-bg.jpg",
    },
    // Add more routes as needed
  };
  const { name, bg } = pageConfig[pathname] || {
    name: "Settings",
    bg: "/images/settings-bg.jpg",
  };
  return (
    <div className="flex h-full w-full bg-black">
      <Navbar />
      <div
        className="w-full px-[70px] py-8  bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header title={name} />
        {children}
      </div>
    </div>
  );
}
