
import { z } from "zod";

export const validationRuleTypeSchema = z.enum(["required"]);

export const validationRuleSchema = z.object({
  type: validationRuleTypeSchema,
  errorMessage: z.string().optional()
});

export type ValidationRuleType = z.infer<typeof validationRuleTypeSchema>;
export type ValidationRule = z.infer<typeof validationRuleSchema>;