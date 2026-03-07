import { z } from "zod";
import { baseFieldDefinitionSchema, FieldKind, optionDefinitionSchema, optionSetSchema } from "./base";


export const selectFieldTypesSchema = z.enum([
  "checkbox",
  "multi-select", 
  "radio", 
  "select"
]);


export const textFieldDefinitionSchema = baseFieldDefinitionSchema.extend({
  definitionType: z.literal("TextField"),
  type: z.enum(["text", "number", "email", "password"]),
  defaultValue: z.union([z.string(), z.number()]).optional()
});

export const selectFieldDefinitionSchema = baseFieldDefinitionSchema.extend({
  definitionType: z.literal("SelectField"),
  options: z.array(optionSetSchema)
}).and(
  z.union([
    z.object({
      multiple: z.literal(true),
      type: z.enum(["checkbox", "multi-select"])
    }),
    z.object({
      multiple: z.literal(false),
      type: z.enum(["radio", "select"])
    })
  ])
);

export const fieldArrayDefinitionSchema = baseFieldDefinitionSchema.extend({
  definitionType: z.literal("FieldArray"),
  type: z.literal("array"),
  fields: z.array(z.any()) // Temporary fix, will be refined later
});

export const booleanFieldDefinitionSchema = baseFieldDefinitionSchema.extend({
  definitionType: z.literal("BooleanField"),
  type: z.literal("boolean"),
  option: optionDefinitionSchema
});

export const dateFieldDefinitionSchema = baseFieldDefinitionSchema.extend({
  definitionType: z.literal("DateField"),
  type: z.literal("date"),
  defaultValue: z.date().optional()
});

export const fieldDefinitionSchema = z.union([
  textFieldDefinitionSchema,
  selectFieldDefinitionSchema,
  fieldArrayDefinitionSchema,
  booleanFieldDefinitionSchema,
  dateFieldDefinitionSchema
]) as z.ZodUnion<[
  typeof textFieldDefinitionSchema,
  typeof selectFieldDefinitionSchema,
  typeof fieldArrayDefinitionSchema,
  typeof booleanFieldDefinitionSchema,
  typeof dateFieldDefinitionSchema
]>;


// Type exports
export type SelectFieldTypes = z.infer<typeof selectFieldTypesSchema>;

export type TextFieldDefinition = z.infer<typeof textFieldDefinitionSchema>;
export type SelectFieldDefinition = z.infer<typeof selectFieldDefinitionSchema>;
export type FieldArrayDefinition = z.infer<typeof fieldArrayDefinitionSchema>;
export type BooleanFieldDefinition = z.infer<typeof booleanFieldDefinitionSchema>;
export type DateFieldDefinition = z.infer<typeof dateFieldDefinitionSchema>;
export type FieldDefinition = z.infer<typeof fieldDefinitionSchema>;


// Helper types
export type FieldDefinitions = FieldDefinition[];
export type StepId = string;

// Helper type to extract field definition by field kind
export type FieldDefinitionOfKind<K extends FieldKind> = 
  Extract<FieldDefinition, { definitionType: K }>;
