import * as yup from "yup";
import { useMemo } from "react";
import {
  FieldKind,
  FormDisplayRules,
  FieldDefinition,
  FieldDefinitions,
  SelectFieldDefinition,
  SelectFieldTypes,
  TextFieldDefinition,
} from "../types";
import { useBoundStore } from "../../store/formEditorStore";

const getSchema = (
  rules?: Record<
    string,
    {
      type: string;
      errorMessage?: string;
      value?: any;
    }[]
  >
) => {
  if (!rules) {
    return;
  }
  let validator: any = yup.string();
  const shape: Record<string, any> = {};
  Object.entries(rules).forEach(([key, rule]) => {
    rule.forEach((r) => {
      switch (r.type) {
        case "string": {
          validator = yup.string();
          break;
        }
        case "required":
          validator = validator.required(r.errorMessage);
          break;
        case "max":
          validator = validator.max(r.value, r.errorMessage);
      }
    });

    shape[key] = validator;
  });

  return yup.object().shape(shape);
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

const getDefaultValues = (
  fields: FieldDefinitions,
  initialValues?: Record<string, any>
) => {
  let newDefaultValues = {};

  const getDefaultValue = (
    type: FieldKind,
    field: FieldDefinition,
    initialValue?: any
  ) => {
    switch (type) {
      case "TextField":
        return (
          initialValue ?? (field as TextFieldDefinition).defaultValue ?? ""
        );
      case "SelectField":
        return getSelectDefaultValue(
          (field as SelectFieldDefinition).type,
          initialValue
        );
      case "BooleanField":
        return initialValue ?? false;
      default:
        return undefined;
    }
  };

  fields.forEach((field) => {
    const name = field.name;
    const initialValue = initialValues?.[name];

    const value = getDefaultValue(field.definitionType, field, initialValue);

    newDefaultValues = { ...newDefaultValues, [name]: value };
  });

  return newDefaultValues;
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
    [definition, initialValues]
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
