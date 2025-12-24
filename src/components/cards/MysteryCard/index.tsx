import Image from "next/image";

const MysteryCard = () => {
  return (
    <div className="h-20 w-20 rounded-[20px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%),linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)] sm:h-[105px] sm:w-[146px]">
      <div className="relative flex h-full w-full">
        <div className="sm:filter-[blur(15px) ] absolute top-1/2 left-1/2 h-9 w-9 -translate-1/2 rounded-full bg-[linear-gradient(180deg,#A0DBF0_0%,#00FFEA_100%)] opacity-[.4] filter-[blur(8.44262981414795px)] sm:h-16 sm:w-16" />
        <Image
          src="/icons/mystery-grid-tick-icon.svg"
          alt="mystery-grid-tick-icon"
          width={56}
          height={56}
          className="absolute top-1/2 left-1/2 size-8! -translate-x-1/2 -translate-y-1/2 object-contain sm:size-14!"
        />
        <span className="font-inter absolute top-[15px] left-[13px] text-[14px] leading-[150%] font-medium text-white sm:top-[13px] sm:text-base">
          1
        </span>
      </div>
    </div>
  );
};

export default MysteryCard;
