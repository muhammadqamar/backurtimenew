import Image from "next/image";
const PaperCard = ({
  image,
  number,
  text,
}: {
  image?: string;
  number?: string | number;
  text?: string;
}) => {
  return (
    <div className="text-black-normal flex h-auto w-full items-start gap-[11px] self-stretch bg-[url(/components/paper-mobile.svg)] bg-cover! bg-center bg-no-repeat px-4 py-[17px] md:gap-4 md:p-6 lg:gap-6 lg:p-8 xl:bg-[url(/components/Paper.svg)]">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[url(/components/paper-card-bg-icon.svg)] bg-cover! bg-center bg-no-repeat p-1 sm:h-12 sm:w-12">
        <Image
          src={image || "/icons/badge/badge-placeholder.png"}
          alt="badge"
          width={40}
          height={40}
          className="h-[26px] w-[26px] object-contain sm:h-10 sm:w-10"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <h4 className="font-cinzel text-black-normal text-[20px] leading-[120%]! font-bold tracking-[1%] uppercase sm:text-2xl sm:tracking-[.24px]">
          50000
        </h4>
        <p className="font-inter text-primitives-grey_900 text-[14px] leading-[140%]! font-normal sm:text-base">
          totle earning
        </p>
      </div>
    </div>
  );
};

export default PaperCard;
