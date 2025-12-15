export default function PerksSection() {
  return (
    <div className="flex w-full flex-col gap-y-10">
      <div className="flex flex-col gap-y-8 border-b border-b-white/20 pb-10">
        <div className="flex flex-col gap-y-[10px]">
          <span className="font-inter text-lg font-medium text-white">
            Current perk
          </span>
          <span className="text-grey-light font-inter text-base font-normal">
            Manage your active perks subscriptions.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 border-b border-b-white/20 pb-10">
        <div className="flex flex-col gap-y-[10px]">
          <span className="font-inter text-lg font-medium text-white">
            Payments
          </span>
          <span className="text-grey-light font-inter text-base font-normal">
            Edit payment method
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-[10px]">
          <span className="font-inter text-lg font-medium text-white">
            Billing
          </span>
          <span className="text-grey-light font-inter text-base font-normal">
            Check your payment history
          </span>
        </div>
      </div>
    </div>
  );
}
