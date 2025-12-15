import Image from "next/image";

interface AchievementsCardProps {
  icon: string;
  title: string;
}

const AchievementsCard = (data: AchievementsCardProps) => {
  const { icon, title } = data;
  return (
    <div className="bg-dark-10 relative flex w-full flex-col items-start gap-2 overflow-hidden rounded-3xl p-1">
      <Image
        src="/pages/profile/shadow-white.svg"
        fill
        alt="layer"
        className="object-fill"
      />
      <div className="relative z-2 flex h-[132px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_100%)]">
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-5"
        />

        <div className="relative flex h-[64px] w-[61px] items-center justify-center bg-contain bg-center bg-no-repeat bg-blend-screen mix-blend-screen">
          <Image src={icon} alt="sage" fill className="object-contain" />
        </div>
      </div>
      <div className="relative z-2 min-h-10 w-full p-2">
        <p className="font-inter text-center text-base leading-[150%] font-medium text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AchievementsCard;
