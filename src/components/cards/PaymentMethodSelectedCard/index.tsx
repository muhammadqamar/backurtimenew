import React from "react";
import { cn } from "@/utils";
import { Radio } from "@/components/common"; // ← Your original Radio component
import Image from "next/image";
import { Danger } from "@/components/icons";

interface PaymentMethodSelectedCardProps {
  bankName?: string;
  bankIconUrl?: string;
  cardNumber?: string | number;
  type?: "card" | "balance";
  selected?: boolean;
  disabled?: boolean;
  insufficientBalance?: boolean;
  onClick?: () => void;
}

const PaymentMethodSelectedCard: React.FC<PaymentMethodSelectedCardProps> = ({
  bankName,
  bankIconUrl,
  cardNumber,
  type = "card",
  selected = false,
  disabled = false,
  insufficientBalance = false,
  onClick,
}) => {
  function maskCardNumber(cn: string | number): string {
    const newCn = cn.toString();
    const digits = newCn.replace(/\D/g, "");
    if (digits.length === 0) return "";
    const lastFour = digits.slice(-4);
    const maskedGroups = Math.max(0, Math.ceil((digits.length - 4) / 4));
    const maskedPart = "****";
    const maskedGroupsArray = Array(maskedGroups).fill(maskedPart);
    return [...maskedGroupsArray, lastFour].join(" ");
  }

  const isBalance = type === "balance";

  const radioChecked = selected;
  const radioDisabled = disabled || insufficientBalance;

  return (
    <div
      className={cn(
        "gradient-box relative h-auto w-full rounded-[20px] p-px",
        "before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:rounded-[20px]",
        insufficientBalance && "before:bg-red-error",
        selected &&
          "before:bg-[linear-gradient(97.44deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
      )}
    >
      <div
        onClick={radioDisabled ? undefined : onClick}
        className={cn(
          "bg-dark-60 gradient-border relative z-1 flex w-full cursor-pointer items-start gap-4 rounded-[20px] p-3 transition-all sm:items-center sm:p-5",
        )}
      >
        <Radio
          checked={radioChecked}
          disabled={radioDisabled}
          onChange={onClick || (() => {})}
        />

        <div className="font-inter flex flex-1 flex-col items-center justify-between gap-4 text-sm leading-[150%] font-medium text-white sm:flex-row sm:text-base">
          <div className="mr-auto flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              {bankIconUrl && !isBalance && (
                <Image
                  src={bankIconUrl as string}
                  alt={bankName as string}
                  width={137}
                  height={24}
                  className="h-auto w-max shrink-0 object-contain"
                />
              )}
              <span>{bankName || (isBalance ? "Time balance" : "")}</span>
            </div>
            {cardNumber && (
              <span className="mr-auto opacity-80">
                {maskCardNumber(cardNumber)}
              </span>
            )}
          </div>
          {insufficientBalance && (
            <span className="text-red-error ml-auto flex items-center gap-2 leading-[140%] font-normal! tracking-[1%] max-sm:text-[12px]!">
              <Danger size={18} className="[&_path]:stroke-red-error!" /> Not
              enough balance
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelectedCard;
