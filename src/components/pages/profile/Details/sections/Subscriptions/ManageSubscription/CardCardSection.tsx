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
    <div className="bg-primitives-white_5 border-primitives-white_20 flex w-full flex-col gap-3 rounded-3xl border p-5">
      {heading && (
        <h2 className="font-inter text-base leading-[150%] font-medium text-white">
          {heading}
        </h2>
      )}
      {text && (
        <p className="font-inter text-grey-light text-base leading-[150%] font-normal">
          {text}
        </p>
      )}
      {buttonText && (
        <Button
          title={buttonText}
          variant="secondary"
          className="mt-2 w-max"
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default CardCardSection;
