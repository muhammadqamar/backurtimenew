import { LogoHeading } from "@/components/common";
import { AuthFooter } from "@/components/pages/auth";

export default function AuthLayout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-between gap-y-[92px] bg-[url(/pages/auth/auth_bg.webp)] bg-cover bg-center py-8">
      <LogoHeading />
      {children}
      <AuthFooter />
    </div>
  );
}
