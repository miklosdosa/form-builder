import {
  BasicDataFormValues,
  DisplayRules,
  FieldBlockDefinition,
  FormDefinitionLayouts,
  FormDefinitionSteps,
  LayoutDefinition,
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

type FormStep = {
  id: string;
  name: string;
};

interface FormDefinitionSlice {
  definitions: FormDefinitionSteps;
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

interface LayoutSlice {
  layouts: FormDefinitionLayouts;
  updateLayout: (payload: LayoutDefinition) => void;
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
