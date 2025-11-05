import z from "zod";
import { baseResponseDataSchema } from "@/schema/response";

export const itemCategorySchema = z.enum([
  "CONDIMENTS",
  "BEVERAGES",
  "CANNED_GOODS",
  "COFFEE_DAIRY",
  "SNACKS",
  "INSTANT_FOOD",
  "CLEANING_SUPPLIES",
  "PERSONAL_CARE",
  "MISCELLANEOUS",
]);

export const itemSchema = z.object({
  name: z
    .string()
    .min(3, "Item name must be at least 3 characters.")
    .max(100, "Name must not be greater than 100 characters."),
  price: z.number().min(1, "Price must be greater than zero"),
  category: itemCategorySchema,
});

export const itemResponseSchema = itemSchema.extend({
  ...baseResponseDataSchema.shape,
});

export type CreateItem = z.infer<typeof itemSchema>;
export type ItemResponse = z.infer<typeof itemResponseSchema>;
