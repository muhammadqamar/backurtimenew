"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


interface HeadingProps {
  title: string;
}

export default function Header({ title }: HeadingProps) {
  const [availableCount, setAvailableCount] = useState(4);

  return (
    <div className="flex h-fit w-full items-center justify-between">
      <span className="font-inter text-2xl font-semibold text-white">
        {title}
      </span>
      <div className="flex gap-5">
        <div className="meter-rate flex items-center justify-center">
          <Image
            src="/pages/common/header/ratio.png"
            alt="app logo"
            width={88}
            height={54}
            className="mr-[4.5px]"
          />
          <div className="flex px-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={`${availableCount > i ? "bg-[linear-gradient(180deg,#F1F9_1%,rgba(255,255,255,0.5)_100%)]" : "bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.5)_100%)]"} mr-1 h-8 w-[13px] rotate-10 rounded-2xl`}
              />
            ))}
          </div>
          <div className="font-cinzel text-[16px] font-bold text-white">
            10/100
          </div>
        </div>
        <div className="fire flex items-center justify-between rounded-[100px] border border-gray-500">
          <Image
            src="/pages/common/header/ratio.png"
            alt="app logo"
            width={88}
            height={54}
          />
          <div className="font-cinzel px-4 text-[16px] font-bold text-white">
            4
          </div>
        </div>

        <div className="fire flex items-center justify-between rounded-[100px] border border-gray-500">
          <Image
            src="/pages/common/header/waiter.png"
            alt="app logo"
            width={58}
            height={58}
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="123">124</SelectItem>
              <SelectItem value="200">200</SelectItem>
              <SelectItem value="300">300</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="message">
          <Image
            src="/pages/common/header/message.png"
            alt="app logo"
            width={58}
            height={58}
          />
        </div>

        <div className="fire flex items-center justify-between rounded-[100px] border border-gray-500">
          <Image
            src="/pages/common/header/ratio.png"
            alt="app logo"
            width={41}
            height={54}
          />
          <div className="font-cinzel px-4 text-[16px] font-bold text-white">
            4
          </div>
        </div>
      </div>
    </div>
  );
}
