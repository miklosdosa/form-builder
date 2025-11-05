type DefinitionType =
  | "TextField"
  | "Select"
  | "FieldArray"
  | "Boolean"
  | "DateTime";
type SelectFieldTypes = "checkbox" | "multi-select" | "radio" | "select";

type ValidationRuleType = "required";

type ValidationRule = {
  type: ValidationRuleType;
  errorMessage?: string;
};

type LayoutDefinition = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}[];

type OptionSet = { name: string; values: OptionDefinition[] };

type DefinitionFormValuesCommon = Pick<
  FieldDefinition,
  "id" | "name" | "label"
>;

type TextFieldFormValues = DefinitionFormValuesCommon & {
  name: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  defaultValue?: string;
};

type SelectFieldFormValues = DefinitionFormValuesCommon & {
  multiple: boolean;
  options: OptionSet;
  type: "checkbox" | "radio" | "multi-select" | "select";
};

type TextFieldValidationFormValues = {
  isRequired: boolean;
  requiredErrorMessage?: string;
};

type TextFieldDisplayDataFormValues = {
  isDisabled: boolean;
  isReadOnly: boolean;
};

type ValidationDataFormValues = TextFieldValidationFormValues;

type BasicDataFormValues = TextFieldFormValues | SelectFieldFormValues;

type DisplayDataFormValues = TextFieldDisplayDataFormValues;

type FieldDefinition<T = string> = {
  id: string;
  definitionType: DefinitionType;
  name: T;
  label?: string;
  helperText?: string;
  placeholder?: string;
};

type OptionDefinition = {
  id: string;
  value: string;
  label: string;
};

type FieldArrayDefinition<T = string> = {
  fields: FieldBlockDefinitionArray<T>;
  type: "array";
} & FieldDefinition<T>;

type TextFieldDefinition<T = string> = {
  type: "text" | "number" | "email" | "password";
  defaultValue?: string | number;
} & FieldDefinition<T>;

type SelectFieldDefinition<T = string> = (
  | { multiple: true; type: "checkbox" | "multi-select" }
  | { multiple: false; type: "radio" | "select" }
) & { options: OptionSet[] } & FieldDefinition<T>;

type BooleanDefinition<T = string> = {
  type: "boolean";
  option: OptionDefinition;
} & FieldDefinition<T>;

type DateTimeDefinition<T = string> = {
  type: "date";
  defaultValue?: Date;
} & FieldDefinition<T>;

type FieldBlockDefinition<T = string> =
  | TextFieldDefinition<T>
  | SelectFieldDefinition<T>
  | FieldArrayDefinition<T>
  | BooleanDefinition<T>
  | DateTimeDefinition<T>;

type FieldBlockDefinitionArray<T = string> = FieldBlockDefinition<T>[];

type FormDefinitionSteps = Record<string, FieldBlockDefinitionArray>;

type ThemeColors =
  | "disabled"
  | "action"
  | "inherit"
  | "success"
  | "warning"
  | "info"
  | "error"
  | "primary"
  | "secondary";

type Placement =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top"
  | undefined;

type ConditionOperator = "eq" | "neq" | "lt" | "gt" | "lte" | "gte";

type FormValueCondition = {
  field: string;
  condition: ConditionOperator;
  value: string | number | boolean;
};

type FieldDisplayRulesCommon = {
  conditions: boolean | FormValueCondition[][];
};

type TextFieldDisplayRules = {
  type: "disabled" | "readOnly";
  value: boolean;
};

type SelectFiledDisplayRules =
  | {
      type: "disabled" | "readonly";
      value: boolean;
    }
  | {
      type: "optionSet";
      value: string;
    };

type FieldArrayDisplayRules =
  | {
      type: "disabled" | "readOnly";
      value: boolean;
    }
  | {
      type: "arrayDirection";
      value: "column" | "row";
    };

type FieldDisplayRules = FieldDisplayRulesCommon &
  (TextFieldDisplayRules | SelectFiledDisplayRules | FieldArrayDisplayRules);

type DisplayRules = Record<string, FieldDisplayRules[]>;

export type {
  DefinitionType,
  TextFieldDefinition,
  FieldBlockDefinition,
  SelectFieldDefinition,
  DateTimeDefinition,
  FieldBlockDefinitionArray,
  FieldArrayDefinition,
  BooleanDefinition,
  OptionDefinition,
  ThemeColors,
  Placement,
  SelectFieldTypes,
  ValidationRule,
  DisplayRules,
  BasicDataFormValues,
  ValidationDataFormValues,
  FormValueCondition,
  DisplayDataFormValues,
  FieldDisplayRules,
  LayoutDefinition,
  FormDefinitionSteps,
};
