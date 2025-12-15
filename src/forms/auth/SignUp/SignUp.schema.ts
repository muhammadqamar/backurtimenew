import * as v from "valibot";

export const SignUpFormSchema = v.pipe(
  v.object({
    username: v.pipe(v.string(), v.nonEmpty("Username cannot be empty")),
    email: v.pipe(
      v.string(),
      v.nonEmpty("Email cannot be empty"),
      v.email("Oops! Looks like the email is incorrect"),
    ),
    password: v.pipe(
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
      [["password"], ["confirmedPassword"]],
      ({ password, confirmedPassword }) =>
        confirmedPassword.localeCompare(password) === 0,
      "Passwords doesn’t match",
    ),
    ["confirmedPassword"],
  ),
);

export type SignUpFormInputs = v.InferInput<typeof SignUpFormSchema>;
