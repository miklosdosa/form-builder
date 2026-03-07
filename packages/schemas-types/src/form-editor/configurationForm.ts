import { z } from "zod";
import { baseFieldDefinitionSchema, optionSetSchema } from "./base";

export const fieldConfigFormBaseSchema = baseFieldDefinitionSchema.pick({
  id: true,
  name: true,
  label: true
});

export const textFieldFormValuesSchema = fieldConfigFormBaseSchema.extend({
  name: z.string(),
  type: z.enum(["text", "number", "email", "password"]),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional()
});

export const selectFieldFormValuesSchema = fieldConfigFormBaseSchema.extend({
  multiple: z.boolean(),
  options: optionSetSchema,
  type: z.enum(["checkbox", "radio", "multi-select", "select"])
});

export const textFieldValidationFormValuesSchema = z.object({
  isRequired: z.boolean(),
  requiredErrorMessage: z.string().optional()
});

export const textFieldDisplayDataFormValuesSchema = z.object({
  isDisabled: z.boolean(),
  isReadOnly: z.boolean()
});

export const fieldConfigFormValuesSchema = z.union([
  textFieldFormValuesSchema,
  selectFieldFormValuesSchema
]);

export const validationConfigFormValuesSchema = textFieldValidationFormValuesSchema;
export const displayConfigFormValuesSchema = textFieldDisplayDataFormValuesSchema;

export type TextFieldFormValues = z.infer<typeof textFieldFormValuesSchema>;
export type SelectFieldFormValues = z.infer<typeof selectFieldFormValuesSchema>;
export type TextFieldValidationFormValues = z.infer<typeof textFieldValidationFormValuesSchema>;
export type TextFieldDisplayDataFormValues = z.infer<typeof textFieldDisplayDataFormValuesSchema>;
export type FieldConfigFormValues = z.infer<typeof fieldConfigFormValuesSchema>;
export type ValidationConfigFormValues = z.infer<typeof validationConfigFormValuesSchema>;
export type DisplayConfigFormValues = z.infer<typeof displayConfigFormValuesSchema>;