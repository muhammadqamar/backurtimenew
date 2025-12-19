"use client";

import { Button, Input } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ForgotPasswordFormInputs,
  ForgotPasswordFormSchema,
} from "./ForgotPassword.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
    resolver: valibotResolver(ForgotPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormInputs> = async ({
    email,
  }) => {
    alert(email);
  };

  const isEmailError = !!errors.email?.message;

  const disabled = isEmailError;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative z-1 flex w-full flex-col gap-y-4 sm:gap-y-8"
    >
      <Input
        withLabel
        labelTitle="Email"
        placeholder="Enter your email"
        withError={isEmailError}
        errorTitle={errors.email?.message}
        id="email"
        {...register("email")}
      />
      <Button
        type="submit"
        title="Reset password"
        withBackgoundImage
        backgroundImageUrl="/components/button_bg_249_54.svg"
        withTextDecoration
        disabled={disabled}
        className="font-cinzel h-[54px] w-[249px] self-center text-[18px] font-bold text-white"
      />
    </form>
  );
}
