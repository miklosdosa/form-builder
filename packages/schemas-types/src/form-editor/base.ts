import { z } from "zod";

export const fieldKindSchema = z.enum([
  "TextField",
  "SelectField",
  "FieldArray",
  "BooleanField",
  "DateField",
]);

export const conditionOperatorSchema = z.enum([
  "eq",
  "neq",
  "lt",
  "gt",
  "lte",
  "gte",
]);

export const layoutItemSchema = z.object({
  i: z.string(),
  x: z.number(),
  y: z.number(),
  w: z.number(),
  h: z.number(),
});

export const formValueConditionSchema = z.object({
  field: z.string(),
  condition: conditionOperatorSchema,
  value: z.union([z.string(), z.number(), z.boolean()]),
});

export const optionDefinitionSchema = z.object({
  id: z.string(),
  value: z.string(),
  label: z.string(),
});

export const optionSetSchema = z.object({
  name: z.string(),
  values: z.array(optionDefinitionSchema),
});

export const baseFieldDefinitionSchema = z.object({
  id: z.string(),
  definitionType: fieldKindSchema,
  name: z.string(),
  label: z.string().optional(),
  helperText: z.string().optional(),
  placeholder: z.string().optional(),
});

export type FieldKind = z.infer<typeof fieldKindSchema>;
export type ConditionOperator = z.infer<typeof conditionOperatorSchema>;
export type FormValueCondition = z.infer<typeof formValueConditionSchema>;
export type LayoutItem = z.infer<typeof layoutItemSchema>;
export type OptionSet = z.infer<typeof optionSetSchema>;
export type GridLayout = LayoutItem[];
