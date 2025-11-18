"use client";

import { Button, Checkbox, Input } from "@/components/common";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInFormInputs, SignInFormSchema } from "./SignIn.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { redirect } from "next/navigation";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: valibotResolver(SignInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async ({
    username,
    password,
  }) => {
    redirect("/dashboard");
  };

  const isUsernameError = !!errors.username?.message;
  const isPasswordError = !!errors.password?.message;

  const disabled = isUsernameError || isPasswordError;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-6">
        <Input
          withLabel
          labelTitle="Username or Email"
          placeholder="Enter your username"
          id="username-or-email"
          withError={isUsernameError}
          errorTitle={errors.username?.message}
          {...register("username")}
        />
        <Input
          type="password"
          withLabel
          labelTitle="Password"
          placeholder="Enter your password"
          id="password"
          withError={isPasswordError}
          errorTitle={errors.password?.message}
          {...register("password")}
        />
        <div className="flex w-full items-center justify-between">
          <Checkbox withLabel labelTitle="Remember me" id="remember-me" />
          <Link
            href="/auth/forgot-password"
            className="text-green-normal font-inter text-base font-medium"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <Button
        type="submit"
        title="Sign in"
        withBackgoundImage
        backgroundImageUrl="/components/button_bg_165_54.svg"
        withTextDecoration
        disabled={disabled}
        className="font-cinzel h-[54px] w-[165px] self-center text-[18px] font-bold text-white"
      />
    </form>
  );
}
