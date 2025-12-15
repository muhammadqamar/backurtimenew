import * as v from "valibot";

export const ResetPasswordFormSchema = v.pipe(
  v.object({
    newPassword: v.pipe(
      v.string(),
      v.nonEmpty("Password cannot be empty"),
      v.minLength(8, "Password should be at least 8 characters"),
    ),
    confirmedPassword: v.pipe(
      v.string(),
      v.nonEmpty("Password cannot be empty"),
      v.minLength(8, "Password should be at least 8 characters"),
    ),
  }),
  v.forward(
    v.partialCheck(
      [["newPassword"], ["confirmedPassword"]],
      ({ newPassword, confirmedPassword }) =>
        confirmedPassword.localeCompare(newPassword) === 0,
      "Passwords doesn’t match",
    ),
    ["confirmedPassword"],
  ),
);

export type ResetPasswordFormInputs = v.InferInput<
  typeof ResetPasswordFormSchema
>;
