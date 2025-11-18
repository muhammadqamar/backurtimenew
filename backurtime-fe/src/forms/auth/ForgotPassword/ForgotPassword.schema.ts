import * as v from "valibot";

export const ForgotPasswordFormSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Email cannot be empty"),
    v.email("Oops! Looks like the email is incorrect"),
  ),
});

export type ForgotPasswordFormInputs = v.InferInput<
  typeof ForgotPasswordFormSchema
>;
