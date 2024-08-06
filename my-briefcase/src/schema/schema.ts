import { z } from "zod";

export const messageSchema = z.object({
  sender: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "This field must be a string",
    })
    .min(5),
  email: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "This field must be a string",
    })
    .email()
    .min(5),
  message: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "This field must be a string",
    })
    .min(5),
});
