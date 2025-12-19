import { NeonText } from "@/components/common";
import BorderImages from "@/forms/auth/BorderImages";
import Image from "next/image";

export default function CheckEmailPage() {
  return (
    <div className="relative flex h-full w-auto flex-col items-center justify-center gap-y-4 p-8 [backdrop-filter:blur(10px)] max-sm:max-w-[343px]! sm:w-xl sm:gap-y-6 sm:px-[88px] sm:pt-[88px] sm:pb-[92px]">
      <BorderImages password />
      <Image
        src="/pages/auth/check-email_image.webp"
        alt="check email image"
        width={120}
        height={120}
        className="relative z-1 max-sm:size-[72px]"
      />
      <div className="relative z-1 flex w-full flex-col items-center gap-y-2 sm:gap-y-4">
        <NeonText
          text="Check your email"
          className="text-center text-[28px] leading-[122%] font-bold whitespace-normal sm:text-[42px] sm:whitespace-nowrap"
        />
        <span className="text-grey-light font-inter text-center text-sm leading-[140%] font-normal sm:text-base">
          Use the sign-in link we sent to{" "}
          <span className="font-medium text-white">test@gmail.com</span> to
          reset your password.
        </span>
        <span className="text-grey-light font-inter text-center text-sm leading-[140%] font-normal sm:text-base">
          Be sure to double check your email—it must be connected to an account
          to receive this message with a link to reset your password.
        </span>
      </div>
    </div>
  );
}
