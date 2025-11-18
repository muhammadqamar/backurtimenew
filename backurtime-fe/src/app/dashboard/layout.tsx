import { Navbar } from "@/components/common";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <div className="min-h-dvh w-full">
      <Navbar />
      <div className="min-h-dvh bg-red-200 pl-[280px]">{children}</div>
    </div>
  );
}
