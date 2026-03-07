import { z } from "zod";
import { formValueConditionSchema } from "./base";

export const displayRuleBaseSchema = z.object({
  conditions: z.union([z.boolean(), z.array(z.array(formValueConditionSchema))])
});

export const textFieldDisplayRulesSchema = z.object({
  type: z.enum(["disabled", "readOnly"]),
  value: z.boolean()
});

export const selectFieldDisplayRulesSchema = z.union([
  z.object({
    type: z.enum(["disabled", "readOnly"]),
    value: z.boolean()
  }),
  z.object({
    type: z.literal("optionSet"),
    value: z.string()
  })
]);

export const fieldArrayDisplayRulesSchema = z.union([
  z.object({
    type: z.enum(["disabled", "readOnly"]),
    value: z.boolean()
  }),
  z.object({
    type: z.literal("arrayDirection"),
    value: z.enum(["column", "row"])
  })
]);


export const fieldDisplayRulesSchema = z.intersection(
  displayRuleBaseSchema,
  z.union([
    textFieldDisplayRulesSchema,
    selectFieldDisplayRulesSchema,
    fieldArrayDisplayRulesSchema
  ])
);

export type TextFieldDisplayRules = z.infer<typeof textFieldDisplayRulesSchema>;
export type SelectFieldDisplayRules = z.infer<typeof selectFieldDisplayRulesSchema>;
export type FieldArrayDisplayRules = z.infer<typeof fieldArrayDisplayRulesSchema>;
export type FieldDisplayRules = z.infer<typeof fieldDisplayRulesSchema>;
export type DisplayRuleBase = z.infer<typeof displayRuleBaseSchema>;