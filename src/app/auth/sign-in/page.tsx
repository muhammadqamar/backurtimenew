import { NeonText } from "@/components/common";
import { AuthDivider, SocialMedias } from "@/components/pages/auth";
import { SignInForm } from "@/forms/auth";
import BorderImages from "@/forms/auth/BorderImages";

export default function SignInPage() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center gap-4 bg-cover bg-center px-8 pt-8 pb-10 [backdrop-filter:blur(10px)] max-sm:max-w-[343px] sm:w-xl sm:gap-y-12 sm:p-[88px]">
      <BorderImages signIn />
      <NeonText
        text="Sign in"
        className="relative z-1 text-center text-[28px] leading-[122%] font-bold sm:text-[42px]"
      />
      <SignInForm />
      <AuthDivider />
      <SocialMedias />
    </div>
  );
}
