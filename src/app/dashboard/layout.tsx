"use client";
import { Navbar } from "@/components/common";
import Header from "@/components/common/Header";
import { usePathname } from "next/navigation";
import { useState } from "react";

type PageConfig = {
  [path: string]: {
    name: string;
    bg: string;
  };
};

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  const [isMobileSidebar, setIsMobileSidebar] = useState<boolean>(false);
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
      bg: "/components/offers-bg.png",
    },
    "/dashboard/settings": {
      name: "Settings",
      bg: "/images/settings-bg.jpg",
    },
    "/dashboard/profile": {
      name: "Profile",
      bg: "/pages/profile/profile_bg.webp",
    },
    // Add more routes as needed
  };
  const { name, bg } = pageConfig[pathname] || {
    name: "Settings",
    bg: "/images/settings-bg.jpg",
  };
  return (
    <div className="bg-black-normal flex h-full w-full pb-16 sm:pb-0">
      <Navbar
        setIsMobileSidebar={setIsMobileSidebar}
        isMobileSidebar={isMobileSidebar}
      />
      <div
        className="w-full overflow-auto bg-cover bg-center px-5 py-8 md:px-8 xl:px-[70px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header setIsMobileSidebar={setIsMobileSidebar} title={name} />
        {children}
      </div>
    </div>
  );
}
