"use client";

import { Button, Input } from "@/components/common";
import {
  ResetPasswordFormInputs,
  ResetPasswordFormSchema,
} from "./ResetPassword.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    defaultValues: {
      newPassword: "",
      confirmedPassword: "",
    },
    mode: "onSubmit",
    resolver: valibotResolver(ResetPasswordFormSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = async (data) => {
    alert(JSON.stringify(data));
  };

  const isNewPasswordError = !!errors.newPassword?.message;
  const isConfirmedPasswordError = !!errors.confirmedPassword?.message;

  const disabled = isNewPasswordError || isConfirmedPasswordError;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-6">
        <Input
          type="password"
          withLabel
          labelTitle="New password"
          placeholder="Create new password"
          id="new-password"
          withError={isNewPasswordError}
          errorTitle={errors.newPassword?.message}
          {...register("newPassword")}
        />
        <Input
          type="password"
          withLabel
          labelTitle="Re-enter password"
          placeholder="Re-enter new password"
          id="re-enter-password"
          withError={isConfirmedPasswordError}
          errorTitle={errors.confirmedPassword?.message}
          {...register("confirmedPassword")}
        />
      </div>
      <Button
        type="submit"
        title="Set password"
        withBackgoundImage
        backgroundImageUrl="/components/button_bg_227_54.svg"
        withTextDecoration
        disabled={disabled}
        className="font-cinzel h-[54px] w-[227px] self-center text-[18px] font-bold text-white"
      />
    </form>
  );
}
