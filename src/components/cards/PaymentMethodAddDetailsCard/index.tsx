import React from "react";
import { cn, customFetch } from "@/utils";
import { Button, Input } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import { CardFormInputs, CardFormSchema } from "./CardForm.schema";

export const PaymentMethodAddDetailsCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<CardFormInputs>({
    defaultValues: {
      name: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    mode: "onChange",
    resolver: valibotResolver(CardFormSchema),
  });

  // Format card number as user types
  const formatCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const limited = digitsOnly.slice(0, 16);
    const formatted = limited.replace(/(\d{4})(?=\d)/g, "$1 ");

    return formatted;
  };

  // Format expiry date as user types
  const formatExpiryDate = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const limited = digitsOnly.slice(0, 4);
    if (limited.length > 2) {
      return `${limited.slice(0, 2)}/${limited.slice(2)}`;
    }

    return limited;
  };

  // Handle card number input change
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setValue("cardNumber", formatted, { shouldValidate: true });
  };

  // Handle expiry date input change
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setValue("expiryDate", formatted, { shouldValidate: true });

    // Also trigger validation for current expiry date to clear "cannot be in the past" error
    setTimeout(() => {
      trigger("expiryDate");
    }, 100);
  };

  // Handle CVV input change - only allow 3 digits
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    const limited = digitsOnly.slice(0, 3);
    setValue("cvv", limited, { shouldValidate: true });
  };

  // Handle name input change with validation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("name", e.target.value, { shouldValidate: true });
  };

  const mutation = useMutation({
    mutationFn: (data: CardFormInputs) => {
      const cleanedData = {
        ...data,
        cardNumber: data.cardNumber.replace(/\s/g, ""),
      };

      return customFetch("/cards/save", {
        method: "POST",
        body: JSON.stringify(cleanedData),
      });
    },
    onSuccess: () => {
      // Redirect or handle success
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<CardFormInputs> = async (data) => {
    mutation.mutate(data);
  };

  const isNameError = !!errors.name?.message;
  const isCardNumberError = !!errors.cardNumber?.message;
  const isExpiryDateError = !!errors.expiryDate?.message;
  const isCvvError = !!errors.cvv?.message;

  const disabled =
    isNameError || isCardNumberError || isExpiryDateError || isCvvError;

  return (
    <div
      className={cn(
        "bg-primitives-white_10 h-auto w-full max-w-[423px] rounded-[20px] p-3 sm:max-w-[566px] sm:p-5",
      )}
    >
      <p className="font-inter mb-3 w-full text-left text-base leading-[140%] font-semibold text-white sm:mb-5">
        New card
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-1 flex w-full flex-col gap-4 sm:gap-y-[30px]"
      >
        <div className="flex w-full flex-col gap-2 sm:gap-4">
          <Input
            withLabel
            labelTitle="Name on card"
            placeholder="Enter name"
            id="name"
            withError={isNameError}
            errorTitle={errors.name?.message}
            onChange={handleNameChange}
            value={watch("name")}
          />

          <div className="grid w-full grid-cols-2 flex-col items-center gap-2 sm:flex sm:flex-row">
            <div className="col-span-2 w-full">
              <Input
                withLabel
                labelTitle="Card number"
                placeholder="0000 0000 0000 0000"
                id="card-number"
                withError={isCardNumberError}
                errorTitle={errors.cardNumber?.message}
                onChange={handleCardNumberChange}
                value={watch("cardNumber")}
                maxLength={19} // 16 digits + 3 spaces
              />
            </div>

            <div className="w-full sm:w-[101px] sm:shrink-0">
              <Input
                withLabel
                labelTitle="Expiry date"
                placeholder="MM/YY"
                id="expiry-date"
                withError={isExpiryDateError}
                errorTitle={errors.expiryDate?.message}
                onChange={handleExpiryDateChange}
                value={watch("expiryDate")}
                maxLength={5}
              />
            </div>
            <div className="w-full sm:w-[101px] sm:shrink-0">
              <Input
                withLabel
                labelTitle="CVV"
                placeholder="123"
                id="cvv"
                withError={isCvvError}
                errorTitle={errors.cvv?.message}
                onChange={handleCvvChange}
                value={watch("cvv")}
                maxLength={3}
              />
            </div>
          </div>
        </div>
        <Button
          type="submit"
          title="Save"
          withBackgoundImage
          backgroundImageUrl="/components/PaymentMethodAddDetailsCard.svg"
          withTextDecoration
          disabled={disabled}
          className="font-cinzel h-9 max-w-full self-center bg-contain! text-base leading-[122%] font-bold text-white sm:h-12 sm:text-[18px]"
        />
      </form>
    </div>
  );
};

export default PaymentMethodAddDetailsCard;
