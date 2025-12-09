"use client";

import { User } from "@/types/user";
import { customFetch } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function ProfileButton() {
  const { data, isLoading } = useQuery({
    queryKey: ["profileButton"],
    queryFn: () => {
      return customFetch<User>("/users/me");
    },
  });

  return (
    <Link href="/profile" className="flex cursor-pointer items-center gap-x-3">
      <div className="relative flex size-[62px] items-center justify-center bg-[url(/components/profile_button_border.svg)] bg-cover bg-center">
        <Image
          src="/components/mock_user_avatar.png"
          alt="mock user avatar"
          width={42}
          height={42}
          className="rounded-full"ß
        />
      </div>
      <div className="flex flex-col items-start gap-y-1">
        <div className="flex items-center gap-x-1">
          <span className="font-cinzel text-base font-bold text-white">
            {isLoading ? "Loading..." : data?.email || "Username"}
          </span>
        </div>
      </div>
    </Link>
  );
}
