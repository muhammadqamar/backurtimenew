import * as v from "valibot";

export const CardFormSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Name on card cannot be empty")),
  cardNumber: v.pipe(
    v.string(),
    v.nonEmpty("Card number cannot be empty"),
    v.regex(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      "Card number must be in the format 0000 0000 0000 0000",
    ),
    // Additional check for exactly 16 digits (without spaces)
    v.check(
      (value) => value.replace(/\s/g, "").length === 16,
      "Card number must be exactly 16 digits",
    ),
  ),
  expiryDate: v.pipe(
    v.string(),
    v.nonEmpty("Expiry date cannot be empty"),
    v.regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiry date must be in MM/YY format (e.g., 03/26)",
    ),
    // Additional validation for expiry date not in the past
    v.check((value) => {
      const [month, year] = value.split("/").map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
      const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed

      // If year is greater than current year, it's valid
      if (year > currentYear) return true;
      // If year is same as current year, check month
      if (year === currentYear) return month >= currentMonth;
      // If year is less than current year, it's expired
      return false;
    }, "Expiry date cannot be in the past"),
  ),
  cvv: v.pipe(
    v.string(),
    v.nonEmpty("CVV cannot be empty"),
    v.regex(/^\d{3}$/, "CVV must be exactly 3 digits"),
  ),
});

export type CardFormInputs = v.InferInput<typeof CardFormSchema>;
