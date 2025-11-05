import { StateCreator } from "zustand";
import { FormDefinitionSteps } from "../../shared/types";
import {
  DefinitionError,
  FormDefinitionSlice,
  PayloadUpdate,
  SliceIntersection,
} from "../formEditorStore.types";

const initialDefinitions: FormDefinitionSteps = {
  initial_step: [],
};

const calculateUpdateResult = (
  state: SliceIntersection,
  payload: PayloadUpdate
) => {
  const errors: DefinitionError[] = [];
  const fields = [...state.definitions[state.selectedStep]];
  const oldPosition = state.definitions[state.selectedStep].findIndex(
    (field) => field.id === payload.currentId
  );
  if (oldPosition === -1) {
    throw Error("Block not found");
  }
  const originalBlock = state.definitions[state.selectedStep][oldPosition];

  if (originalBlock.id !== payload.id) {
    if (
      state.definitions[state.selectedStep].findIndex(
        (field) => field.id === payload.id
      ) !== -1
    ) {
      errors.push({
        fieldId: originalBlock.id,
        propertyName: "id",
        code: "ID_NOT_UNIQUE",
      });
    }
  }

  if (originalBlock.name !== payload.name) {
    if (
      state.definitions[state.selectedStep].findIndex(
        (field) => field.name === payload.name
      ) !== -1
    ) {
      errors.push({
        fieldId: originalBlock.id,
        propertyName: "name",
        code: "NAME_NOT_UNIQUE",
      });
    }
  }

  if (errors.findIndex((error) => error.fieldId === originalBlock.id) === -1) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updated: any = {
      ...fields[oldPosition],
      ...payload,
    };

    fields.splice(oldPosition, 1, { ...updated });
  }

  return {
    fields,
    errors,
  };
};

const formDefinitionSlice: StateCreator<
  SliceIntersection,
  [],
  [],
  FormDefinitionSlice
> = (set, get) => ({
  definitions: initialDefinitions,
  errors: [],
  fieldUnderEdit: null,
  setFieldUnderEdit: (id) =>
    set(() => ({
      fieldUnderEdit: id,
    })),
  addField: (payload) =>
    set((state) => {
      return {
        definitions: {
          ...state.definitions,
          [state.selectedStep]: [
            ...state.definitions[state.selectedStep],
            {
              id: payload.id,
              name: payload.name,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              type: (payload.type as any) ?? "text",
              definitionType: payload.definitionType ?? "TextField",
            },
          ],
        },
        layout: [
          ...state.layout,
          {
            i: payload.id,
            x: 0,
            y: state.layout.length,
            w: 12,
            h: 1,
          },
        ],
      };
    }),
  updateField: (payload) => {
    const result = calculateUpdateResult(get(), payload);
    set((state) => ({
      definitions: {
        ...state.definitions,
        [state.selectedStep]: result.fields,
      },
      errors: result.errors,
    }));
    return result;
  },
  deleteField: (payload) =>
    set((state) => {
      const oldPosition = state.definitions[state.selectedStep].findIndex(
        (field) => field.id === payload.id
      );

      if (oldPosition === -1) {
        throw Error("Block not found");
      }

      const fields = [...state.definitions[state.selectedStep]];

      fields.splice(oldPosition, 1);

      return {
        definitions: {
          ...state.definitions,
          [state.selectedStep]: fields,
        },
      };
    }),
});

export { formDefinitionSlice };
