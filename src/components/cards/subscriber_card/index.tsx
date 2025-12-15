import { cn } from "@/utils";
import Image from "next/image";
interface subscriptionProps {
  status: string;
  logo: string;
  name: string;
  member: number;
}

const SubscriptionOwnerCard = (data: subscriptionProps) => {
  const { status, logo, name, member } = data;
  return (
    <div className="bg-white-10 relative flex w-full flex-col items-start gap-2 overflow-hidden rounded-[42px] p-1">
      <div
        className={`absolute bottom-[84px] left-1/2 h-[137px] w-[276px] -translate-x-1/2 rounded-[276px] ${status?.includes("Public") ? "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]" : "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]"} opacity-[0.3] blur-[68px]`}
      />

      <div className="border-primitives-white_30 shadow-dark-sm bg-dark-100 relative z-2 min-h-[199px] w-full overflow-hidden rounded-[38px] border p-[18px]">
        <div className="relative z-3 flex w-full items-center justify-end">
          <div
            className={cn(
              "h-auto w-max rounded-3xl p-px",
              status?.includes("Public")
                ? "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]"
                : "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]",
            )}
          >
            <div className="bg-gray flex h-6 w-full items-center justify-center rounded-3xl border border-solid border-transparent px-[11px] py-[3px]">
              <span className="font-inter text-[12px] font-normal tracking-[1%] text-white capitalize">
                {status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-full min-h-[120] w-full flex-col items-center justify-center">
          <div className="relative z-2 h-16 w-16">
            <Image src={logo} fill alt="layer" className="object-contain" />
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-full ${status?.includes("Public") ? "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(54,255,255,0.40)_94.75%)]" : "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(29,149,97,0.40)_94.75%)]"} `}
        />
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-2 flex min-h-10 w-full flex-col gap-4 px-4 pb-4">
        <p className="font-inter text-[18px] leading-[140%] font-semibold tracking-[1%] text-white">
          {name}
        </p>
        <div className="flex w-full items-center justify-between gap-2.5">
          <div className="flex items-center">
            {[...Array(member)].map((i) => (
              <div
                key={i}
                className={`relative -ml-5 h-11 w-11 rounded-full bg-white first:ml-0`}
              >
                <Image
                  src="/components/mock_user_avatar.png"
                  alt="btn"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="font-inter text-grey-light text-base leading-[150%]! font-medium">
            1/{member} members
          </p>
        </div>
        <button className="relative flex min-h-12 w-full items-center justify-center p-[13px]">
          <span className="font-cinzel text-lg leading-[122%]! font-bold text-white">
            Access The Subscription
          </span>
          <Image
            src="/components/frame-left-btn.svg"
            alt="btn"
            width={20}
            height={48}
            className="absolute top-0 right-0 h-full w-5 object-cover object-right"
          />
          <Image
            src="/components/frame-btn.svg"
            alt="btn"
            width={20}
            height={48}
            className="absolute top-0 left-0 h-full min-h-12 w-[calc(100%-20px)] object-cover object-left"
          />
        </button>
      </div>
    </div>
  );
};

export default SubscriptionOwnerCard;
