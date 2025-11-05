import * as yup from "yup";
import { useEffect, useMemo, useState } from "react";
import {
  DefinitionType,
  DisplayRules,
  FieldBlockDefinition,
  FieldBlockDefinitionArray,
  SelectFieldDefinition,
  SelectFieldTypes,
  TextFieldDefinition,
} from "../types";

const getSchema = (
  rules?: Record<
    string,
    {
      type: string;
      errorMessage: string;
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
  fields: FieldBlockDefinitionArray,
  initialValues?: Record<string, any>
) => {
  let newDefaultValues = {};

  const getDefaultValue = (
    type: DefinitionType,
    field: FieldBlockDefinition,
    initialValue?: any
  ) => {
    switch (type) {
      case "TextField":
        return (
          initialValue ?? (field as TextFieldDefinition).defaultValue ?? ""
        );
      case "Select":
        return getSelectDefaultValue(
          (field as SelectFieldDefinition).type,
          initialValue
        );
      case "Boolean":
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
  definition: FieldBlockDefinitionArray;
  initialValues?: object;
  rules?: any;
  displayRules?: DisplayRules;
};

const useFields = ({
  definition,
  initialValues,
  rules,
  displayRules,
}: useFieldsProps) => {
  const [formDefinition, setFormDefinition] = useState(definition);
  const [defaultValues, setDefaultValues] = useState(initialValues);

  useEffect(() => {
    setFormDefinition(definition);
  }, [definition]);

  useEffect(() => {
    setDefaultValues(getDefaultValues(definition, initialValues));
  }, [definition, initialValues, setDefaultValues]);

  const validationSchema = useMemo(() => {
    return getSchema(rules);
  }, [rules]);

  const displayRulesMem = useMemo(() => displayRules, [displayRules]);

  const updateFormDefinition = (newValues: FieldBlockDefinitionArray) => {
    setFormDefinition(newValues);
  };

  return {
    formDefinition,
    defaultValues,
    validationSchema,
    displayRules: displayRulesMem,
    updateFormDefinition,
  };
};

export { useFields };
