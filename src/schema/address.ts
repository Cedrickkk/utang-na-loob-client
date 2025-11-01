import z from "zod";

export const addressSchema = z.object({
  houseNumber: z.string().min(1, "House number is required."),
  street: z.string().min(1, "Street is required."),
  city: z.string().min(1, "City is required."),
});

export type Address = z.infer<typeof addressSchema>;
