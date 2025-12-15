import * as v from "valibot";

export const SignInFormSchema = v.object({
  username: v.pipe(v.string(), v.nonEmpty("Username cannot be empty")),
  password: v.pipe(
    v.string(),
    v.nonEmpty("Password cannot be empty"),
    v.minLength(8, "Password should be at least 8 characters"),
  ),
});

export type SignInFormInputs = v.InferInput<typeof SignInFormSchema>;
