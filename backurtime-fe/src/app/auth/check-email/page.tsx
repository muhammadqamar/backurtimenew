import { NeonText } from "@/components/common";
import Image from "next/image";

export default function CheckEmailPage() {
  return (
    <div className="flex h-[527px] w-xl flex-col items-center gap-y-6 bg-[url(/pages/auth/check-email_border.webp)] bg-cover bg-center p-16">
      <Image
        src="/pages/auth/check-email_image.webp"
        alt="check email image"
        width={120}
        height={120}
      />
      <div className="flex w-full flex-col items-center gap-y-4">
        <NeonText text="Check your email" className="text-[42px] font-bold" />
        <span className="text-grey-light font-inter text-center text-base font-normal">
          Use the sign-in link we sent to{" "}
          <span className="font-medium text-white">test@gmail.com</span> to
          reset your password.
        </span>
        <span className="text-grey-light font-inter text-center text-base font-normal">
          Be sure to double check your email—it must be connected to an account
          to receive this message with a link to reset your password.
        </span>
      </div>
    </div>
  );
}
