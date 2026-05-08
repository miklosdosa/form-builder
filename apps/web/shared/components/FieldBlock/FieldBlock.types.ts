import {
  BooleanFieldDefinition,
  DateFieldDefinition,
  FieldArrayDefinition,
  FieldDefinition,
  FieldDisplayRules,
  SelectFieldDefinition,
  TextFieldDefinition,
} from "@repo/schemas-types";

type FieldBlockCommonProps = {
  name?: string;
  displayRules?: FieldDisplayRules[];
};

type FieldBlockProps = FieldBlockCommonProps & {
  definition: FieldDefinition;
};

type TextFieldBlockProps = FieldBlockCommonProps & {
  definition: TextFieldDefinition;
};

type BooleanBlockProps = FieldBlockCommonProps & {
  definition: BooleanFieldDefinition;
};

type FieldArrayProps = FieldBlockCommonProps & {
  definition: FieldArrayDefinition;
  addLabel?: string;
  removeLabel?: string;
};

type SelectBlockProps = FieldBlockCommonProps & {
  definition: SelectFieldDefinition;
};

type CheckboxGroupProps = FieldBlockCommonProps & {
  definition: any;
};

type DatePickerBlockProps = FieldBlockCommonProps & {
  definition: DateFieldDefinition;
};

export type {
  FieldBlockProps,
  TextFieldBlockProps,
  BooleanBlockProps,
  SelectBlockProps,
  FieldArrayProps,
  CheckboxGroupProps,
  DatePickerBlockProps,
};
