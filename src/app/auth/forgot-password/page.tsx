import { NeonText } from "@/components/common";
import { ForgotPasswordForm } from "@/forms/auth";
import BorderImages from "@/forms/auth/BorderImages";

export default function ForgotPasswordPage() {
  return (
    <div className="relative flex h-full w-auto flex-col gap-y-4 p-8 [backdrop-filter:blur(10px)] max-sm:max-w-[343px]! sm:w-xl sm:gap-y-12 sm:p-[88px]">
      <BorderImages password />
      <div className="relative z-1 flex w-full flex-col items-center gap-y-2 sm:gap-y-4">
        <NeonText
          text="Forgot password"
          className="text-center text-[28px] leading-[122%] font-bold whitespace-normal sm:text-[42px] sm:whitespace-nowrap"
        />
        <span className="font-inter text-grey-light text-center text-sm leading-[140%] font-normal sm:text-base">
          Enter your email address and we'll send you a link to reset your
          password
        </span>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
