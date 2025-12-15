"use client";

import { Button, Input } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormInputs, SignUpFormSchema } from "./SignUp.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Policies } from "@/components/pages/auth";
import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { customFetch } from "@/utils";

export default function SignUpForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormInputs>({
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmedPassword: "",
		},
		mode: "onSubmit",
		resolver: valibotResolver(SignUpFormSchema),
	});

	const mutation = useMutation({
		mutationFn: (data: SignUpFormInputs) => {
			return customFetch("/auth/register", {
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

	const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
		mutation.mutate(data);
	};

	const isUsernameError = !!errors.username?.message;
	const isEmailError = !!errors.email?.message;
	const isPasswordError = !!errors.password?.message;
	const isConfirmedPasswordError = !!errors.confirmedPassword?.message;

	const disabled =
		isUsernameError ||
		isEmailError ||
		isPasswordError ||
		isConfirmedPasswordError;

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex w-full flex-col gap-y-8"
		>
			<div className="grid w-full grid-cols-2 gap-6">
				<Input
					withLabel
					labelTitle="Username"
					placeholder="Enter your username"
					id="username"
					withError={isUsernameError}
					errorTitle={errors.username?.message}
					{...register("username")}
				/>
				<Input
					withLabel
					labelTitle="Email"
					placeholder="Enter your email"
					id="email"
					withError={isEmailError}
					errorTitle={errors.email?.message}
					{...register("email")}
				/>
				<Input
					type="password"
					withLabel
					labelTitle="Password"
					placeholder="Create a password"
					id="password"
					withError={isPasswordError}
					errorTitle={errors.password?.message}
					{...register("password")}
				/>
				<Input
					type="password"
					withLabel
					labelTitle="Re-enter password"
					placeholder="Re-enter password"
					id="re-enter-password"
					withError={isConfirmedPasswordError}
					errorTitle={errors.confirmedPassword?.message}
					{...register("confirmedPassword")}
				/>
			</div>
			<Policies />
			<Button
				type="submit"
				title="Sign up"
				withBackgoundImage
				backgroundImageUrl="/components/button_bg_168_54.svg"
				withTextDecoration
				disabled={disabled}
				className="font-cinzel h-[54px] w-[168px] self-center text-[18px] font-bold text-white"
			/>
		</form>
	);
}
