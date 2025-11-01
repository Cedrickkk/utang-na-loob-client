import z from "zod";

export const baseResponseDataSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const apiErrorSchema = z.object({
  status: z.number(),
  error: z.string(),
  message: z.string(),
  timeStamp: z.date(),
  errors: z.record(z.string(), z.string()).optional(),
});

export const apiResponseSchema = <T extends z.ZodType>(data: T) =>
  z.object({
    status: z.number(),
    message: z.string(),
    timeStamp: z.string(),
    data: data.optional(),
  });

export type BaseResponseData = z.infer<typeof baseResponseDataSchema>;
export type ApiError = z.infer<typeof apiErrorSchema>;
export type ApiResponse<T> = z.infer<ReturnType<typeof apiResponseSchema>> & {
  data?: T;
};
