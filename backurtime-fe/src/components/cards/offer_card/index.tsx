import Image from "next/image";
import { Progress } from "@/components/ui/progress";
const OfferCard = ({ image, title, progress, state1, state2, state3 }) => {
  return (
    <div className="max-w-[400px] rounded-4xl bg-gray-600 p-[8px] text-white">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={image}
          alt="Background"
          fill
          className="rounded-4xl object-cover object-center"
        />
      </div>
      <div className="p-[16px]">
        <h2 className="font-cinzel  bold pt-[4px] pb-[8px] text-[20px] leading-[120%]">
          {title}
        </h2>
        <div className="progress-meter"></div>
        <div className="stats">
          <div className="">
            <div className="progress">
              <div className="font-inter normal flex justify-between text-[16px] leading-[140%]">
                Progress
                <span className="text-[14px]">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <span>{state1}</span>
          </div>
          <div className="">
            <Image width={500} height={500} alt="Picture of the author" />
            <span>{state2}</span>
          </div>
          <div className="">
            <Image width={500} height={500} alt="Picture of the author" />
            <span>{state3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
