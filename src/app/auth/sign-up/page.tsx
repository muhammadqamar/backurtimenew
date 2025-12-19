import { NeonText } from "@/components/common";
import { AuthDivider, SocialMedias } from "@/components/pages/auth";
import { SignUpForm } from "@/forms/auth";
import BorderImages from "@/forms/auth/BorderImages";

export default function SignUpPage() {
  return (
    <div className="relative flex h-auto max-w-[343px] flex-col items-center gap-4 px-8 pt-10 pb-6 [backdrop-filter:blur(10px)] sm:max-w-[822px] sm:gap-y-12 sm:p-14 md:px-[88px] md:pt-[88px] md:pb-[59px]">
      <BorderImages />
      <NeonText
        text="Registration"
        className="relative z-1 text-center text-[28px] leading-[122%] font-bold sm:text-[42px]"
      />
      <SignUpForm />
      <AuthDivider />
      <SocialMedias />
    </div>
  );
}
