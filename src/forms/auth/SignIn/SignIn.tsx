"use client";

import { Button, Checkbox, Input } from "@/components/common";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInFormInputs, SignInFormSchema } from "./SignIn.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { customFetch } from "@/utils";

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

  const mutation = useMutation({
    mutationFn: (data: SignInFormInputs) => {
      return customFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      redirect("/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    mutation.mutate(data);
  };

  const isUsernameError = !!errors.username?.message;
  const isPasswordError = !!errors.password?.message;

  const disabled = isUsernameError || isPasswordError;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative z-1 flex w-full flex-col gap-4 sm:gap-y-8"
    >
      <div className="flex w-full flex-col gap-4 sm:grid-cols-2 sm:gap-6">
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
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <Checkbox withLabel labelTitle="Remember me" id="remember-me" />
          <Link
            href="/auth/forgot-password"
            className="text-green-normal font-inter ml-auto text-sm leading-[150%] font-medium sm:text-base"
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
        className="font-cinzel h-[54px] max-w-[279px] self-center text-[18px] font-bold text-white max-sm:bg-[url(/components/mobile-auth-button.svg)]! sm:max-w-[165px]"
      />
    </form>
  );
}
