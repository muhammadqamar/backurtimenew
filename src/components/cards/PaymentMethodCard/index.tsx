import Image from "next/image";
import { Button, Status } from "@/components/common";

interface PaymentMethodCardProps {
  bankName: string;
  cardLast4: string;
  expiry: string;
  isPrimary?: boolean;
  onChangeCard?: () => void;
  onDeleteCard?: () => void;
  iconSrc: string;
}

function PaymentMethodCard({
  bankName,
  cardLast4,
  expiry,
  isPrimary = false,
  onChangeCard,
  onDeleteCard,
  iconSrc,
}: PaymentMethodCardProps) {
  return (
    <div className="bg-primitives-white_10 w-full rounded-3xl px-4 py-4 sm:px-5 sm:py-5">
      {/* ================= DESKTOP ================= */}
      <div className="hidden w-full justify-between sm:flex">
        <div className="flex items-center gap-3">
          <Image src={iconSrc} alt="bank-icon" width={27} height={16} />

          <div className="flex gap-2.5">
            <p className="font-inter text-sm font-medium text-white sm:text-base">
              {bankName}
            </p>
            <p className="text-grey-light font-inter text-sm font-medium sm:text-base">
              **** {cardLast4}
            </p>
          </div>

          {isPrimary && (
            <Status
              text="Primary"
              type="gold"
              small
              className="[&>div_span]:max-sm:text-[10px]!"
            />
          )}
        </div>

        <div className="flex gap-2">
          <Button
            title="Change card"
            onClick={onChangeCard}
            className="font-inter min-h-0 w-fit p-0 text-[10px] font-semibold sm:text-xs"
          />

          {!isPrimary && (
            <>
              <span className="text-primitives-white_20">|</span>
              <Button
                title="Delete primary"
                onClick={onDeleteCard}
                className="font-inter min-h-0 w-fit p-0 text-[10px] font-semibold sm:text-xs"
              />
            </>
          )}
        </div>
      </div>

      <p className="text-grey-light font-inter ml-[39px] hidden text-xs sm:block sm:text-base">
        Expires {expiry}
      </p>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden">
        {/* Row 1 */}
        <div
          className={`flex w-full items-center ${
            isPrimary ? "justify-between" : "gap-3"
          }`}
        >
          <div className="flex items-center gap-3">
            <Image src={iconSrc} alt="bank-icon" width={27} height={16} />

            <div className="flex gap-2.5">
              <p className="font-inter text-sm font-medium text-white">
                {bankName}
              </p>
              <p className="text-grey-light font-inter text-sm font-medium">
                **** {cardLast4}
              </p>
            </div>
          </div>

          {isPrimary && (
            <Status
              text="Primary"
              type="gold"
              small
              className="[&>div_span]:text-[10px]"
            />
          )}

          {!isPrimary && (
            <p className="text-grey-light font-inter ml-auto text-xs">
              Expires {expiry}
            </p>
          )}
        </div>

        {/* Row 2 */}
        {isPrimary ? (
          <div className="mt-3 flex items-center justify-between">
            <p className="text-grey-light font-inter text-xs">
              Expires {expiry}
            </p>

            <Button
              title="Change card"
              onClick={onChangeCard}
              className="font-inter min-h-0 w-fit p-0 text-[10px] font-semibold sm:text-xs"
            />
          </div>
        ) : (
          <div className="mt-3 flex gap-2">
            <Button
              title="Change card"
              onClick={onChangeCard}
              className="font-inter min-h-0 w-fit p-0 text-[10px] font-semibold sm:text-xs"
            />
            <span className="text-primitives-white_20">|</span>
            <Button
              title="Delete primary"
              onClick={onDeleteCard}
              className="font-inter min-h-0 w-fit p-0 text-[10px] font-semibold sm:text-xs"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentMethodCard;
