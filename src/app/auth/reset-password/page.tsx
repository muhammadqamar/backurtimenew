import { NeonText } from "@/components/common";
import { ResetPasswordForm } from "@/forms/auth";

export default function ResetPasswordPage() {
  return (
    <div className="flex h-[527px] w-xl flex-col items-center gap-y-12 bg-[url(/pages/auth/check-email_border.webp)] bg-cover bg-center p-16">
      <NeonText
        text="Reset your password"
        className="text-center text-[42px] font-bold"
      />
      <ResetPasswordForm />
    </div>
  );
}
