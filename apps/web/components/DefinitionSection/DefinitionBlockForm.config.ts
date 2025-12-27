import {
  DefinitionType,
  DisplayRules,
  FieldBlockDefinition,
  FieldBlockDefinitionArray,
  LayoutDefinition,
  TextFieldDefinition,
} from "../../shared/types";

const commonFormDefinitionFields: FieldBlockDefinitionArray<
  keyof FieldBlockDefinition
> = [
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

const textFormDefinition: FieldBlockDefinitionArray<keyof TextFieldDefinition> =
  [
    ...commonFormDefinitionFields,
    {
      id: "type",
      definitionType: "Select",
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

const selectFormDefinition: FieldBlockDefinitionArray = [
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
    definitionType: "Boolean",
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
    definitionType: "Select",
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

const dateFieldFormDefinition: FieldBlockDefinitionArray = [
  ...commonFormDefinitionFields,
];

const textFieldValidationFormDefinition: FieldBlockDefinitionArray = [
  {
    id: "isRequired",
    name: "isRequired",
    label: "Reguired",
    definitionType: "Boolean",
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

const selectFieldValidationFormDefinition: FieldBlockDefinitionArray = [
  {
    id: "isRequired",
    name: "isRequired",
    label: "Reguired",
    definitionType: "Boolean",
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

const textFieldDisplayRulesFormDefinition: FieldBlockDefinitionArray = [
  {
    id: "disabled",
    name: "isDisabled",
    label: "Disabled",
    definitionType: "Boolean",
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
    definitionType: "Boolean",
    type: "boolean",
    option: {
      id: "readOnly",
      label: "Read only",
      value: "readOnly",
    },
  },
];

const selectFieldDisplayRulesFormDefinition: FieldBlockDefinitionArray = [
  {
    id: "disabled",
    name: "isDisabled",
    label: "Disabled",
    definitionType: "Boolean",
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

const selectFormDefinitionDisplayRules: DisplayRules = {
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

const textFieldLayout: LayoutDefinition = [
  { i: "id", x: 0, y: 0, w: 12, h: 1 },
  { i: "name", x: 0, y: 1, w: 12, h: 1 },
  { i: "label", x: 0, y: 1, w: 12, h: 1 },
  { i: "type", x: 0, y: 2, w: 3, h: 1 },
  { i: "defaultValue", x: 3, y: 3, w: 9, h: 1 },
  { i: "placeholder", x: 0, y: 4, w: 12, h: 1 },
];

const formDefinitionValidationRules: Record<
  DefinitionType,
  ValidationRecord | undefined
> = {
  TextField: textFormDefinitionValidation,
  Select: undefined,
  FieldArray: undefined,
  Boolean: undefined,
  DateTime: undefined,
};

const formDefinitionDisplayRules: Record<DefinitionType, DisplayRules> = {
  TextField: {},
  Select: selectFormDefinitionDisplayRules,
  FieldArray: {},
  Boolean: {},
  DateTime: {},
};

const formDefinitions: Record<DefinitionType, FieldBlockDefinitionArray> = {
  TextField: textFormDefinition,
  Select: selectFormDefinition,
  FieldArray: [],
  Boolean: [],
  DateTime: dateFieldFormDefinition,
};

const formValidationFormDefinitions: Record<
  DefinitionType,
  FieldBlockDefinitionArray
> = {
  TextField: textFieldValidationFormDefinition,
  Select: selectFieldValidationFormDefinition,
  FieldArray: [],
  Boolean: [],
  DateTime: [],
};

const formDisplayRulesFormDefinitions: Record<
  DefinitionType,
  FieldBlockDefinitionArray
> = {
  TextField: textFieldDisplayRulesFormDefinition,
  Select: selectFieldDisplayRulesFormDefinition,
  FieldArray: [],
  Boolean: [],
  DateTime: [],
};

const formDefinitionLayout: Record<DefinitionType, LayoutDefinition> = {
  TextField: textFieldLayout,
  Select: [],
  FieldArray: [],
  Boolean: [],
  DateTime: [],
};

export {
  formDefinitions,
  textFormDefinitionValidation,
  formDefinitionValidationRules,
  formDefinitionDisplayRules,
  formValidationFormDefinitions,
  formDisplayRulesFormDefinitions,
  formDefinitionLayout,
};
