import { StateCreator } from "zustand";
import { FormDefinition } from "../../shared/types";
import {
  DefinitionError,
  FormDefinitionSlice,
  PayloadUpdate,
  SliceIntersection,
} from "../formEditorStore.types";

const initialFields: FormDefinition = [];

const calculateUpdateResult = (
  state: SliceIntersection,
  payload: PayloadUpdate
) => {
  const errors: DefinitionError[] = [];
  const fields = [...state.fields];
  const oldPosition = state.fields.findIndex(
    (field) => field.id === payload.currentId
  );
  if (oldPosition === -1) {
    throw Error("Block not found");
  }
  const originalBlock = state.fields[oldPosition];

  if (originalBlock.id !== payload.id) {
    if (state.fields.findIndex((field) => field.id === payload.id) !== -1) {
      errors.push({
        fieldId: originalBlock.id,
        propertyName: "id",
        code: "ID_NOT_UNIQUE",
      });
    }
  }

  if (originalBlock.name !== payload.name) {
    if (state.fields.findIndex((field) => field.name === payload.name) !== -1) {
      errors.push({
        fieldId: originalBlock.id,
        propertyName: "name",
        code: "NAME_NOT_UNIQUE",
      });
    }
  }

  if (errors.findIndex((error) => error.fieldId === originalBlock.id) === -1) {
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
  fields: initialFields,
  errors: [],
  fieldUnderEdit: null,
  setFieldUnderEdit: (id) =>
    set(() => ({
      fieldUnderEdit: id,
    })),
  addField: (payload) =>
    set((state) => {
      return {
        fields: [
          ...state.fields,
          {
            id: payload.id,
            name: payload.name,
            type: (payload.type as any) ?? "text",
            definitionType: payload.definitionType ?? "TextField",
          },
        ],
      };
    }),
  updateField: (payload) => {
    const result = calculateUpdateResult(get(), payload);
    set({
      fields: result.fields,
      errors: result.errors,
    });
    return result;
  },
  deleteField: (payload) =>
    set((state) => {
      const oldPosition = state.fields.findIndex(
        (field) => field.id === payload.id
      );

      if (oldPosition === -1) {
        throw Error("Block not found");
      }

      const fields = [...state.fields];

      fields.splice(oldPosition, 1);

      return {
        fields,
      };
    }),
});

export { formDefinitionSlice };
