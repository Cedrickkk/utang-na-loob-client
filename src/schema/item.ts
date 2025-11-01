import z from "zod";
import { baseResponseDataSchema } from "./response";

export const itemSchema = z.object({
  name: z
    .string()
    .min(3, "Item name must be at least 3 characters.")
    .max(100, "Name must not be greater than 100 characters."),
  price: z.number().min(1, "Price must be greater than zero"),
});

export const itemResponseSchema = itemSchema.extend({
  ...baseResponseDataSchema.shape,
});

export type CreateItem = z.infer<typeof itemSchema>;
export type ItemResponse = z.infer<typeof itemResponseSchema>;
