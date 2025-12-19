"use client";

import Link from "next/link";

export default function Policies() {
  return (
    <p className="text-grey-light font-inter w-full text-sm leading-[140%] font-normal sm:text-base sm:leading-[150%]">
      By clicking 'Sign up' or Continue with Google, Facebook, or Apple, you
      agree to our{" "}
      <Link
        href="/auth/sign-up"
        className="text-green-normal font-inter underline"
      >
        Liability Policy
      </Link>
      ,&nbsp;
      <Link
        href="/auth/sign-up"
        className="text-green-normal font-inter underline"
      >
        Privacy Policy
      </Link>
      , and&nbsp;
      <Link
        href="/auth/sign-up"
        className="text-green-normal font-inter underline"
      >
        Terms of Service
      </Link>
    </p>
  );
}
