import {
  FieldConfigFormValues,
  FormDisplayRules,
  FieldDefinition,
  FormStepLayouts,
  FormStepDefinitions,
  GridLayout,
  ValidationRule,
} from "../shared/types";

type PayloadAdd = Pick<
  FieldDefinition,
  "definitionType" | "type" | "id" | "name"
>;
type PayloadUpdate = { currentId: string } & Partial<FieldConfigFormValues>;
type PayloadDelete = Pick<FieldDefinition, "id">;

type ErrorCode = "ID_NOT_UNIQUE" | "NAME_NOT_UNIQUE";

type DefinitionError = {
  fieldId: string;
  propertyName: string;
  code: ErrorCode;
};

type Validation = Record<string, ValidationRule[]>;
type Display = FormDisplayRules;

type FormStep = {
  id: string;
  name: string;
};

interface FormDefinitionSlice {
  definitions: FormStepDefinitions;
  errors: DefinitionError[];
  fieldUnderEdit: string | null;
  addField: (payload: PayloadAdd) => void;
  updateField: (payload: PayloadUpdate) => {
    fields: FieldDefinition<string>[];
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

interface LayoutSlice {
  layouts: FormStepLayouts;
  updateLayout: (payload: GridLayout) => void;
}

interface FormStepSlice {
  steps: FormStep[];
  selectedStep: string;
  addStep: (payload: Pick<FormStep, "name">) => void;
  setSelectedStep: (id: string) => void;
}

type SliceIntersection = FormDefinitionSlice &
  ValidationSlice &
  DisplaySlice &
  LayoutSlice &
  FormStepSlice;

export type {
  FormDefinitionSlice,
  ValidationSlice,
  Validation,
  DisplaySlice,
  Display,
  LayoutSlice,
  FormStepSlice,
  SliceIntersection,
  PayloadAdd,
  PayloadUpdate,
  DefinitionError,
  FormStep,
};
