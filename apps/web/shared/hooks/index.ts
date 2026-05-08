import { z } from "zod";
import { useMemo } from "react";

import { useBoundStore } from "../../store/formEditorStore";
import {
  SelectFieldTypes,
  FieldDefinitions,
  FieldKind,
  FieldDefinition,
  TextFieldDefinition,
  SelectFieldDefinition,
  FormDisplayRules,
} from "@repo/schemas-types";

const getSchema = (
  rules?: Record<
    string,
    {
      type: string;
      errorMessage?: string;
      value?: any;
    }[]
  >,
) => {
  if (!rules) {
    return;
  }
  let validator: z.ZodString = z.string();
  const shape: Record<string, z.ZodTypeAny> = {};
  Object.entries(rules).forEach(([key, rule]) => {
    rule.forEach((r) => {
      switch (r.type) {
        case "string": {
          validator = z.string();
          break;
        }
        case "required":
          validator = validator.min(
            1,
            r.errorMessage || "This field is required",
          );
          break;
        case "max":
          validator = validator.max(r.value, r.errorMessage);
          break;
      }
    });

    shape[key] = validator;
  });

  return z.object(shape);
};

const getSelectDefaultValue = (type: SelectFieldTypes, initialValue?: any) => {
  switch (type) {
    case "checkbox":
    case "multi-select":
      return initialValue ?? [];
    case "radio":
    case "select":
      return initialValue ?? "";
    default:
      return undefined;
  }
};

const getDefaultValueByFieldType = (
  type: FieldKind,
  field: FieldDefinition,
  initialValue?: any,
) => {
  switch (type) {
    case "TextField":
      return initialValue ?? (field as TextFieldDefinition).defaultValue ?? "";
    case "SelectField":
      return getSelectDefaultValue(
        (field as SelectFieldDefinition).type,
        initialValue,
      );
    case "BooleanField":
      return initialValue ?? false;
    default:
      return undefined;
  }
};

const getDefaultValues = (
  fields: FieldDefinitions,
  initialValues?: Record<string, any>,
) => {
  const defaultValues: Record<string, any> = {};

  fields.forEach((field) => {
    const name = field.name;
    const initialValue = initialValues?.[name];

    const value = getDefaultValueByFieldType(
      field.definitionType,
      field,
      initialValue,
    );

    defaultValues[name] = value;
  });

  return defaultValues;
};

type useFieldsProps = {
  definition: FieldDefinitions;
  initialValues?: object;
  rules?: any;
  displayRules?: FormDisplayRules;
};

const useFields = ({
  definition,
  initialValues,
  rules,
  displayRules,
}: useFieldsProps) => {
  const defaultValuesMem = useMemo(
    () => getDefaultValues(definition, initialValues),
    [definition, initialValues],
  );

  const validationSchema = useMemo(() => getSchema(rules), [rules]);

  const displayRulesMem = useMemo(() => displayRules, [displayRules]);

  return {
    formDefinition: definition,
    defaultValues: defaultValuesMem,
    validationSchema,
    displayRules: displayRulesMem,
  };
};

const useStoreFields = () => {
  const selectedStep = useBoundStore((state) => state.selectedStep);
  const fields = useBoundStore((state) => state.definitions);
  const validation = useBoundStore((state) => state.validation);
  const displayRules = useBoundStore((state) => state.display);
  const layouts = useBoundStore((state) => state.layouts);

  const validationSchema = useMemo(() => getSchema(validation), [validation]);

  const stepFields = fields[selectedStep] ?? [];

  return {
    fields: stepFields,
    validationSchema,
    defaultValues: getDefaultValues(stepFields),
    displayRules,
    layoutDefinition: layouts[selectedStep],
  };
};

export { useFields, useStoreFields };
