import { FieldDefinition, FieldDefinitions, FieldKind, FormDisplayRules, GridLayout, TextFieldDefinition } from "@repo/schemas-types";

const commonFormDefinitionFields: FieldDefinitions = [
  {
    id: "id",
    definitionType: "TextField",
    name: "id",
    label: "ID",
    type: "text",
  },
  {
    id: "name",
    definitionType: "TextField",
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    id: "label",
    definitionType: "TextField",
    name: "label",
    label: "Label",
    type: "text",
  },
];

const textFormDefinition: FieldDefinitions =
  [
    ...commonFormDefinitionFields,
    {
      id: "type",
      definitionType: "SelectField",
      multiple: false,
      name: "type",
      label: "Type",
      type: "select",
      options: [
        {
          name: "textFieldType",
          values: [
            {
              id: "text",
              label: "Text",
              value: "text",
            },
            {
              id: "number",
              label: "Number",
              value: "number",
            },
            {
              id: "email",
              label: "Email",
              value: "email",
            },
            {
              id: "password",
              label: "Password",
              value: "password",
            },
          ],
        },
      ],
    },
    {
      id: "defaultValue",
      name: "defaultValue",
      definitionType: "TextField",
      label: "Default value",
      type: "text",
    },
    {
      id: "placeholder",
      definitionType: "TextField",
      name: "placeholder",
      label: "Placeholder",
      type: "text",
    },
  ];

const selectFormDefinition: FieldDefinitions = [
  ...commonFormDefinitionFields,
  {
    id: "options",
    name: "options",
    label: "Options",
    definitionType: "FieldArray",
    type: "array",
    fields: [
      {
        id: "optionSetName",
        name: "optionSetName",
        label: "Option set name",
        definitionType: "TextField",
        type: "text",
      },
      {
        id: "optionSet",
        name: "values",
        label: "Option set",
        definitionType: "FieldArray",
        type: "array",
        fields: [
          {
            id: "id",
            name: "id",
            label: "ID",
            definitionType: "TextField",
            type: "text",
          },
          {
            id: "value",
            name: "value",
            label: "Value",
            definitionType: "TextField",
            type: "text",
          },
          {
            id: "label",
            name: "label",
            label: "Label",
            definitionType: "TextField",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    id: "multiple",
    name: "multiple",
    label: "Multiple",
    definitionType: "BooleanField",
    type: "boolean",
    option: {
      id: "multiple",
      label: "Multiple",
      value: "multiple",
    },
  },
  {
    id: "type",
    name: "type",
    label: "Render",
    definitionType: "SelectField",
    type: "select",
    multiple: false,
    options: [
      {
        name: "singleSelect",
        values: [
          {
            id: "select",
            label: "Dropdown",
            value: "select",
          },
          {
            id: "radio",
            label: "Radio",
            value: "radio",
          },
        ],
      },
      {
        name: "multiSelect",
        values: [
          {
            id: "select",
            label: "Dropdown",
            value: "select",
          },
          {
            id: "checkbox",
            label: "Checkbox",
            value: "checkbox",
          },
        ],
      },
    ],
  },
];

const dateFieldFormDefinition: FieldDefinitions = [
  ...commonFormDefinitionFields,
];

const textFieldValidationFormDefinition: FieldDefinitions = [
  {
    id: "isRequired",
    name: "isRequired",
    label: "Reguired",
    definitionType: "BooleanField",
    type: "boolean",
    option: {
      id: "required",
      label: "Required",
      value: "required",
    },
  },
  {
    id: "requiredErrorMessage",
    name: "requiredErrorMessage",
    label: "Required error message",
    definitionType: "TextField",
    type: "text",
  },
];

const selectFieldValidationFormDefinition: FieldDefinitions = [
  {
    id: "isRequired",
    name: "isRequired",
    label: "Reguired",
    definitionType: "BooleanField",
    type: "boolean",
    option: {
      id: "required",
      label: "Required",
      value: "required",
    },
  },
  {
    id: "requiredErrorMessage",
    name: "requiredErrorMessage",
    label: "Required error message",
    definitionType: "TextField",
    type: "text",
  },
];

const textFieldDisplayRulesFormDefinition: FieldDefinitions = [
  {
    id: "disabled",
    name: "isDisabled",
    label: "Disabled",
    definitionType: "BooleanField",
    type: "boolean",
    option: {
      id: "disabled",
      label: "Disabled",
      value: "disabled",
    },
  },
  {
    id: "readOnly",
    name: "isReadOnly",
    label: "Disabled",
    definitionType: "BooleanField",
    type: "boolean",
    option: {
      id: "readOnly",
      label: "Read only",
      value: "readOnly",
    },
  },
];

const selectFieldDisplayRulesFormDefinition: FieldDefinitions = [
  {
    id: "disabled",
    name: "isDisabled",
    label: "Disabled",
    definitionType: "BooleanField",
    type: "boolean",
    option: {
      id: "disabled",
      label: "Disabled",
      value: "disabled",
    },
  },
];

const RULE_OBJECTS = {
  string: {
    type: "string",
    errorMessage: "Must be a string",
  },
  required: {
    type: "required",
    errorMessage: "This field is required",
  },
};

type ValidationRecord = Record<
  string,
  { type: string; errorMessage: string }[]
>;

const textFormDefinitionValidation: ValidationRecord = {
  id: [RULE_OBJECTS.string, RULE_OBJECTS.required],
  name: [RULE_OBJECTS.string, RULE_OBJECTS.required],
};

const selectFormDefinitionDisplayRules: FormDisplayRules = {
  type: [
    {
      type: "optionSet",
      conditions: [
        [
          {
            field: "multiple",
            condition: "eq",
            value: true,
          },
        ],
      ],
      value: "multiSelect",
    },
  ],
  options: [
    {
      type: "arrayDirection",
      conditions: true,
      value: "column",
    },
  ],
};

const textFieldLayout: GridLayout = [
  { i: "id", x: 0, y: 0, w: 12, h: 1 },
  { i: "name", x: 0, y: 1, w: 12, h: 1 },
  { i: "label", x: 0, y: 1, w: 12, h: 1 },
  { i: "type", x: 0, y: 2, w: 3, h: 1 },
  { i: "defaultValue", x: 3, y: 3, w: 9, h: 1 },
  { i: "placeholder", x: 0, y: 4, w: 12, h: 1 },
];

const formDefinitionValidationRules: Record<
  FieldKind,
  ValidationRecord | undefined
> = {
  TextField: textFormDefinitionValidation,
  SelectField: undefined,
  FieldArray: undefined,
  BooleanField: undefined,
  DateField: undefined,
};

const formDefinitionDisplayRules: Record<FieldKind, FormDisplayRules> = {
  TextField: {},
  SelectField: selectFormDefinitionDisplayRules,
  FieldArray: {},
  BooleanField: {},
  DateField: {},
};

const fieldEditorFormsByKind: Record<FieldKind, FieldDefinitions> = {
  TextField: textFormDefinition,
  SelectField: selectFormDefinition,
  FieldArray: [],
  BooleanField: [],
  DateField: dateFieldFormDefinition,
};

const formValidationFormDefinitions: Record<FieldKind, FieldDefinitions> = {
  TextField: textFieldValidationFormDefinition,
  SelectField: selectFieldValidationFormDefinition,
  FieldArray: [],
  BooleanField: [],
  DateField: [],
};

const formDisplayRulesFormDefinitions: Record<FieldKind, FieldDefinitions> = {
  TextField: textFieldDisplayRulesFormDefinition,
  SelectField: selectFieldDisplayRulesFormDefinition,
  FieldArray: [],
  BooleanField: [],
  DateField: [],
};

const formDefinitionLayout: Record<FieldKind, GridLayout> = {
  TextField: textFieldLayout,
  SelectField: [],
  FieldArray: [],
  BooleanField: [],
  DateField: [],
};

export {
  fieldEditorFormsByKind,
  textFormDefinitionValidation,
  formDefinitionValidationRules,
  formDefinitionDisplayRules,
  formValidationFormDefinitions,
  formDisplayRulesFormDefinitions,
  formDefinitionLayout,
};
