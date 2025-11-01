import z from "zod";
import { debtorSchema } from "./debtor";
import { baseResponseDataSchema } from "./response";

export const paymentStatusEnum = z.enum(["COMPLETED", "VOIDED", "FAILED"]);
export const debtStatusEnum = z.enum([
  "OUTSTANDING",
  "PAID_IN_FULL",
  "PARTIALLY_PAID",
  "OVERDUE",
]);

export const debtSchema = z.object({
  debtorName: debtorSchema,
  debtStatus: debtStatusEnum,
  originalAmount: z.number(),
  currentBalance: z.number(),
});

export const debtResponseSchema = debtSchema.extend({
  ...baseResponseDataSchema.shape,
});

export type CreateDebt = z.infer<typeof debtSchema>;
export type DebtResponse = z.infer<typeof debtResponseSchema>;
