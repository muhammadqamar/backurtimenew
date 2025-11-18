import { NeonText } from "@/components/common";
import { ForgotPasswordForm } from "@/forms/auth";

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-[496px] w-xl flex-col gap-y-12 bg-[url(/pages/auth/forgot-password_border.webp)] bg-cover bg-center p-16">
      <div className="flex w-full flex-col items-center gap-y-4">
        <NeonText text="Forgot password" className="text-[42px] font-bold" />
        <span className="font-inter text-grey-light text-center text-base font-normal">
          Enter your email address and we'll send you a link to reset your
          password
        </span>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
