import z from "zod";
import { addressSchema } from "./address";
import { baseResponseDataSchema } from "./response";

export const debtorSchema = z.object({
  name: z.string(),
  email: z.email(),
  address: addressSchema,
  contactNumber: z.string().regex(/^(09|\+639)\d{9}$/),
});

export const debtorResponseSchema = debtorSchema.extend({
  ...baseResponseDataSchema.shape,
});

export type CreateDebtor = z.infer<typeof debtorSchema>;
export type DebtorResponse = z.infer<typeof debtorResponseSchema>;
