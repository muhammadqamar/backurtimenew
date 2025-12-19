import { NeonText } from "@/components/common";
import { ResetPasswordForm } from "@/forms/auth";
import BorderImages from "@/forms/auth/BorderImages";

export default function ResetPasswordPage() {
  return (
    <div className="relative flex h-full w-auto flex-col gap-y-4 p-8 [backdrop-filter:blur(10px)] max-sm:max-w-[343px]! sm:w-xl sm:gap-y-12 sm:px-12 sm:py-[88px]">
      <BorderImages password />
      <NeonText
        text="Reset your password"
        className="text-center text-[28px] leading-[122%] font-bold whitespace-normal sm:text-[42px] sm:whitespace-nowrap"
      />
      <ResetPasswordForm />
    </div>
  );
}
