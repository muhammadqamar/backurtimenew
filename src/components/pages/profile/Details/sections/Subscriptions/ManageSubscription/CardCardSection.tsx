import { Button } from "@/components/common";
import React, { ReactEventHandler } from "react";

interface TypesProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  onClick?: ReactEventHandler;
}

const CardCardSection = ({
  heading,
  text,
  buttonText,
  onClick,
}: TypesProps) => {
  return (
    <div className="bg-primitives-white_5 border-primitives-white_20 flex w-full flex-col gap-2 rounded-3xl border p-4 sm:gap-3 sm:p-5">
      {heading && (
        <h2 className="font-inter text-sm leading-[150%] font-medium text-white sm:text-base">
          {heading}
        </h2>
      )}
      {text && (
        <p className="font-inter text-grey-light text-sm leading-[150%] font-normal sm:text-base">
          {text}
        </p>
      )}
      {buttonText && (
        <Button
          title={buttonText}
          variant="secondary"
          className="mt-3 w-max px-[22px]! max-sm:text-[18px] sm:mt-2"
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default CardCardSection;
