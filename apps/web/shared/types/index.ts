type FieldKind =
  | "TextField"
  | "SelectField"
  | "FieldArray"
  | "BooleanField"
  | "DateField";
type SelectFieldTypes = "checkbox" | "multi-select" | "radio" | "select";

type ValidationRuleType = "required";

type ValidationRule = { type: ValidationRuleType; errorMessage?: string };

type LayoutItem = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type GridLayout = LayoutItem[];

// Base types
type OptionDefinition = { id: string; value: string; label: string };

type OptionSet = { name: string; values: OptionDefinition[] };

// Base field definition type
type BaseFieldDefinition<T = string> = {
  id: string;
  definitionType: FieldKind;
  name: T;
  label?: string;
  helperText?: string;
  placeholder?: string;
};

type FieldConfigFormBase = Pick<
  BaseFieldDefinition,
  "id" | "name" | "label"
>;

type TextFieldFormValues = FieldConfigFormBase & {
  name: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  defaultValue?: string;
};

type SelectFieldFormValues = FieldConfigFormBase & {
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

type ValidationConfigFormValues = TextFieldValidationFormValues;

type FieldConfigFormValues = TextFieldFormValues | SelectFieldFormValues;

type DisplayConfigFormValues = TextFieldDisplayDataFormValues;

type FieldArrayDefinition<T = string> = {
  fields: FieldDefinitions<T>;
  type: "array";
} & BaseFieldDefinition<T>;

type TextFieldDefinition<T = string> = {
  type: "text" | "number" | "email" | "password";
  defaultValue?: string | number;
} & BaseFieldDefinition<T>;

type SelectFieldDefinition<T = string> = (
  | { multiple: true; type: "checkbox" | "multi-select" }
  | { multiple: false; type: "radio" | "select" }
) & { options: OptionSet[] } & BaseFieldDefinition<T>;

type BooleanFieldDefinition<T = string> = {
  type: "boolean";
  option: OptionDefinition;
} & BaseFieldDefinition<T>;

type DateFieldDefinition<T = string> = {
  type: "date";
  defaultValue?: Date;
} & BaseFieldDefinition<T>;

type FieldDefinition<T = string> =
  | TextFieldDefinition<T>
  | SelectFieldDefinition<T>
  | FieldArrayDefinition<T>
  | BooleanFieldDefinition<T>
  | DateFieldDefinition<T>;

type FieldDefinitions<T = string> = FieldDefinition<T>[];

// Helper type to extract field definition by field kind
type FieldDefinitionOfKind<
  K extends FieldKind,
  NameType = string
> = Extract<FieldDefinition<NameType>, { definitionType: K }>;

// Step ID type for better type safety
type StepId = string;

type FormStepDefinitions = Record<StepId, FieldDefinitions>;

type FormStepLayouts = Record<StepId, GridLayout>;

type ConditionOperator = "eq" | "neq" | "lt" | "gt" | "lte" | "gte";

type FormValueCondition = {
  field: string;
  condition: ConditionOperator;
  value: string | number | boolean;
};

type DisplayRuleBase = { conditions: boolean | FormValueCondition[][] };

type TextFieldDisplayRules = { type: "disabled" | "readOnly"; value: boolean };

type SelectFieldDisplayRules =
  | { type: "disabled" | "readOnly"; value: boolean }
  | { type: "optionSet"; value: string };

type FieldArrayDisplayRules =
  | { type: "disabled" | "readOnly"; value: boolean }
  | { type: "arrayDirection"; value: "column" | "row" };

type FieldDisplayRules = DisplayRuleBase &
  (TextFieldDisplayRules | SelectFieldDisplayRules | FieldArrayDisplayRules);

type FormDisplayRules = Record<string, FieldDisplayRules[]>;

// Complete form definition type that ties together all related data
type FormDefinition = {
  steps: FormStepDefinitions;
  layouts: FormStepLayouts;
  validation?: Record<string, ValidationRule[]>;
  display?: FormDisplayRules;
};

export type {
  FieldKind,
  TextFieldDefinition,
  FieldDefinition,
  SelectFieldDefinition,
  DateFieldDefinition,
  FieldDefinitions,
  FieldArrayDefinition,
  BooleanFieldDefinition,
  OptionDefinition,
  SelectFieldTypes,
  ValidationRule,
  FormDisplayRules,
  FieldConfigFormValues,
  ValidationConfigFormValues,
  FormValueCondition,
  DisplayConfigFormValues,
  FieldDisplayRules,
  LayoutItem,
  GridLayout,
  FormStepDefinitions,
  FormStepLayouts,
  FormDefinition,
  StepId,
  FieldDefinitionOfKind,
};
