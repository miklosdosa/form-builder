import {
  BasicDataFormValues,
  DisplayRules,
  FieldBlockDefinition,
  FormDefinition,
  ValidationRule,
} from "../shared/types";

type PayloadAdd = Pick<
  FieldBlockDefinition,
  "definitionType" | "type" | "id" | "name"
>;
type PayloadUpdate = { currentId: string } & Partial<BasicDataFormValues>;
type PayloadDelete = Pick<FieldBlockDefinition, "id">;

type ErrorCode = "ID_NOT_UNIQUE" | "NAME_NOT_UNIQUE";

type DefinitionError = {
  fieldId: string;
  propertyName: string;
  code: ErrorCode;
};

type Validation = Record<string, ValidationRule[]>;
type Display = DisplayRules;

interface FormDefinitionSlice {
  fields: FormDefinition;
  errors: DefinitionError[];
  fieldUnderEdit: string | null;
  addField: (payload: PayloadAdd) => void;
  updateField: (payload: PayloadUpdate) => {
    fields: FieldBlockDefinition<string>[];
    errors: DefinitionError[];
  };
  deleteField: (payload: PayloadDelete) => void;
  setFieldUnderEdit: (id: string | null) => void;
}

interface ValidationSlice {
  validation: Validation;
  updateValidation: (payload: Validation) => void;
}

interface DisplaySlice {
  display: Display;
  updateDisplay: (payload: Display) => void;
}

type SliceIntersection = FormDefinitionSlice & ValidationSlice & DisplaySlice;

export type {
  FormDefinitionSlice,
  ValidationSlice,
  Validation,
  DisplaySlice,
  Display,
  SliceIntersection,
  PayloadAdd,
  PayloadUpdate,
  DefinitionError,
};
