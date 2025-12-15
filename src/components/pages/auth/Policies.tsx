"use client";

import Link from "next/link";

export default function Policies() {
  return (
    <span className="text-grey-light w-full text-base font-normal">
      By clicking 'Sign up' or Continue with Google, Facebook, or Apple, you
      agree to our <br />
      <Link
        href="/auth/sign-up"
        className="text-green-normal font-inter underline"
      >
        Liability Policy
      </Link>
      ,{" "}
      <Link
        href="/auth/sign-up"
        className="text-green-normal font-inter underline"
      >
        Privacy Policy
      </Link>
      , and{" "}
      <Link
        href="/auth/sign-up"
        className="text-green-normal font-inter underline"
      >
        Terms of Service
      </Link>
    </span>
  );
}
