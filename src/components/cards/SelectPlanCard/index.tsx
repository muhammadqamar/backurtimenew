import React from "react";
import { cn } from "@/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Badge from "@/components/common/Badge";
import Image from "next/image";
import { Button } from "@/components/common";
import { ChevronDown, Danger } from "@/components/icons";

interface planProps {
  className?: string;
  isOpen?: boolean;
  inSharePlan?: boolean;
  planImage?: string;
  variant?: "user-plan" | "onboarding-plan" | "default";
}

const SelectPlanCard = ({
  className,
  isOpen = false,
  inSharePlan = true,
  planImage,
  variant = "default",
}: planProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("grid w-full grid-cols-1 gap-4", className)}
      defaultValue="item-1"
    >
      <AccordionItem
        className="bg-primitives-white_10 w-full rounded-3xl px-4 py-3"
        value={`item-1`}
      >
        <AccordionTrigger className="flex w-full flex-col items-start justify-between gap-3 transition-all sm:flex-row sm:items-center [&[data-state=open]>svg]:rotate-180">
          <div className="flex items-center gap-3">
            {variant === "user-plan" ? (
              <Badge type="user" level={21} mediaUrl={""} />
            ) : (
              <Image
                src={planImage || "/components/subcription-setting-icon.svg"}
                alt={"username"}
                width={62}
                height={62}
                className={cn(
                  "drop-shadow-icon-sm object-contain sm:size-[62px]!",
                  variant === "onboarding-plan" ? "size-14!" : "size-8!",
                )}
              />
            )}
            <div className="flex flex-col items-start gap-1">
              <span className="font-inter flex items-center gap-1.5 text-sm leading-[150%] font-medium text-white sm:text-base">
                Username
                {variant !== "default" && (
                  <Image
                    src="/icons/shield-green.svg"
                    alt={"username"}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                )}
              </span>
              {inSharePlan && variant !== "default" && (
                <p className="font-inter text-grey-light text-[12px] leading-[140%] font-normal tracking-[0.12px] sm:text-base sm:tracking-[0.16px]">
                  is sharing&nbsp;
                  <span className="font-medium text-white sm:text-sm sm:tracking-[0.14px]">
                    Premium plan
                  </span>
                </p>
              )}
            </div>
          </div>
          {variant === "user-plan" && (
            <div className="flex w-full items-center gap-6 max-sm:justify-between sm:w-max">
              <p className="font-inter flex items-center leading-[140%] tracking-[1%]">
                {inSharePlan ? (
                  <>
                    <span className="inline-flex text-[18px] font-semibold whitespace-nowrap">
                      € 2.66
                    </span>
                    <span className="text-base font-normal text-white">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-base font-normal text-white">
                    Member since March 13, 2025
                  </span>
                )}
              </p>
              {inSharePlan && (
                <Button
                  title="Join"
                  withBackgoundImage
                  backgroundImageUrl="/components/join-btn.svg"
                  withTextDecoration
                  className="font-cinzel h-9 w-[101px] self-center text-[18px] leading-[122%] font-bold text-white max-sm:bg-[url(/components/join-small-btn.svg)]! sm:h-12 sm:w-[137px]"
                />
              )}
            </div>
          )}
          {variant === "default" && (
            <ChevronDown className="[&_path]:stroke-white!" />
          )}
        </AccordionTrigger>
        {isOpen && (
          <AccordionContent className="mt-3 flex flex-col gap-4 px-3 text-balance">
            <div className="grid w-full grid-cols-1 gap-3 sm:gap-3.5">
              {[
                { type: "Premium plan" },
                { type: "Verified invoice" },
                { type: "By invitation link" },
              ].map((i) => (
                <div className="flex items-center gap-3" key={i.type}>
                  <Image
                    src="/icons/tick-green.svg"
                    alt={"username"}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span className="font-inter text-sm leading-[140%] font-medium text-white sm:text-base">
                    {i.type}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-primitives-white_10 h-px w-full" />
            <div className="grid w-full grid-cols-1 gap-3">
              <span className="font-inter flex items-center gap-3 text-sm leading-[150%] font-medium text-white sm:text-base">
                <Danger size={20} className="[&_path]:stroke-white!" /> Please
                note:
              </span>
              <p className="font-inter text-grey-light text-sm leading-[140%] font-normal sm:text-base">
                Once the monthly instalment is paid, subscription owner will
                send you an invitation link through which you can create your
                account.
              </p>
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default SelectPlanCard;
