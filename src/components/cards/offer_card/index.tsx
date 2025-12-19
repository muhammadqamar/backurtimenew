import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button, Status } from "@/components/common";
import { cn } from "@/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Apple, Clock, Document, Info } from "@/components/icons";

type Variant = "my-offer" | "simple-offer" | "premium-offer" | "ads";
interface TypeProps {
  progress: number;
  image: string;
  title: string;
  stats1: number;
  stats2: number;
  stats3: string;
  variant: Variant;
}

const OfferCard = ({
  image,
  title,
  progress,
  stats1,
  stats2,
  variant,
}: TypeProps) => {
  const platform = [
    {
      title: "",
      icon: <Apple size={16} />,
      content: "iOS system",
    },
    {
      title: "",
      icon: <Document size={16} />,
      content: "Complete survey",
    },
    {
      title: "20s",
      icon: <Clock size={16} />,
      content: "Estimated time",
    },
  ];

  return (
    <div className="bg-primitives-white_20 relative flex w-full flex-col gap-3 overflow-hidden rounded-4xl p-2 text-white">
      <div className="bg-sea-green absolute top-[125px] left-1/2 h-[137px] w-[276px] -translate-x-1/2 filter-[blur(68.05000305175781px)]" />
      <div
        className={cn(
          "relative z-1 aspect-video w-full overflow-hidden rounded-4xl bg-cover! bg-no-repeat! p-[18px]",
        )}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}) lightgray`,
        }}
      >
        {(variant === "simple-offer" || variant === "premium-offer") && (
          <div className="flex h-auto w-full items-center justify-end gap-1.5">
            {platform.map((item, i) => (
              <Tooltip key={i}>
                <TooltipTrigger className="bg-primitives-black_50 hover:text-green-normal hover:[&>svg_path]:stroke-green-normal flex h-8 min-w-8 items-center gap-1 rounded-full px-2 py-1.5 text-white">
                  {item.icon}
                  {item.title && (
                    <span className="font-inter text-base leading-[140%]! font-normal tracking-[16.px]">
                      {item.title}
                    </span>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={12}
                  direction="top"
                  className="w-max rounded-[12px]! px-3 py-1.5"
                >
                  <span className="font-inter text-black-normal text-base leading-[140%]! font-normal tracking-[.16px]">
                    {item.content}
                  </span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        )}
      </div>
      <div className="relative z-1 w-full px-4 pt-2 pb-3">
        <h2 className="font-cinzel motion-safe mb-2 text-[20px] leading-[120%] font-bold tracking-[.2px] uppercase">
          {title}
        </h2>

        <div className="mb-3 flex w-full flex-col gap-2">
          <div className="font-inter text-grey-light flex justify-between text-base leading-[140%]! font-normal tracking-[.16px]">
            {variant === "my-offer" ? (
              <>
                {progress < 100 ? "Progress" : "Received reward"}
                {progress < 100 && (
                  <span className="text-[14px]! font-medium! tracking-[.14px]! text-white">
                    {progress}%
                  </span>
                )}
              </>
            ) : (
              "Reward"
            )}
          </div>
          {progress < 100 && variant === "my-offer" && (
            <Progress value={progress} />
          )}
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/pages/offers/spores-gold-badge.svg"
                width={40}
                height={40}
                alt="Picture of the author"
                className="drop-shadow-icon-sm"
              />
              <span className="font-cinzel text-base leading-[120%]! font-bold text-white">
                {stats1}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/pages/offers/spores-gray-badge.svg"
                width={40}
                height={40}
                alt="Picture of the author"
                className="drop-shadow-icon-sm"
              />
              <span className="font-cinzel text-base leading-[120%]! font-bold text-white">
                {stats2}
              </span>
            </div>
          </div>

          {(variant === "simple-offer" ||
            (variant === "my-offer" && progress === 100)) && (
            <Status
              text="Your content"
              status="completed"
              className="ml-auto"
            />
          )}

          {variant === "premium-offer" && (
            <span className="font-inter ml-auto text-base leading-[140%]! font-normal tracking-[.16px] text-white">
              *Deposit
            </span>
          )}
        </div>
        {variant !== "my-offer" && (
          <div className="mt-[18px] flex w-full items-center gap-2">
            <Button title="Earn Now" variant="secondary" />
            <Button
              icon={<Info className="[&>path]:stroke-primitives-blue" />}
              className="border-primitives-white_10 bg-primitives-white_10 flex h-12 w-12 items-center justify-center rounded-full border p-3"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
