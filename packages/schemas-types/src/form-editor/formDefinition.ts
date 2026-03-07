import { z } from "zod";
import { fieldDisplayRulesSchema } from "./displayRule";
import { fieldDefinitionSchema } from "./fieldDefinition";
import { validationRuleSchema } from "./validationRule";
import { layoutItemSchema } from "./base";

export const formStepDefinitionsSchema = z.record(z.string(), z.array(fieldDefinitionSchema));
export const formStepLayoutsSchema = z.record(z.string(), z.array(layoutItemSchema));
export const formDisplayRulesSchema = z.record(z.string(), z.array(fieldDisplayRulesSchema));

export const formDefinitionSchema = z.object({
  steps: formStepDefinitionsSchema,
  layouts: formStepLayoutsSchema,
  validation: z.record(z.string(), z.array(validationRuleSchema)).optional(),
  display: formDisplayRulesSchema.optional()
});

export type FormStepDefinitions = z.infer<typeof formStepDefinitionsSchema>;
export type FormStepLayouts = z.infer<typeof formStepLayoutsSchema>;
export type FormDisplayRules = z.infer<typeof formDisplayRulesSchema>;
export type FormDefinition = z.infer<typeof formDefinitionSchema>;