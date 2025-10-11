import {
  BooleanDefinition,
  DateTimeDefinition,
  FieldArrayDefinition,
  FieldBlockDefinition,
  FieldDisplayRules,
  SelectFieldDefinition,
  TextFieldDefinition,
} from "../../types";

type FieldBlockCommonProps = {
  name?: string;
  auxOnChange?: (value: string | boolean) => void;
  displayRules?: FieldDisplayRules[];
};

type FieldBlockProps = FieldBlockCommonProps & {
  definition: FieldBlockDefinition;
};

type TextFieldBlockProps = FieldBlockCommonProps & {
  definition: TextFieldDefinition;
};

type BooleanBlockProps = FieldBlockCommonProps & {
  definition: BooleanDefinition;
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
  definition: DateTimeDefinition;
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
