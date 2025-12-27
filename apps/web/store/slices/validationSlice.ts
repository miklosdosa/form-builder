import { StateCreator } from "zustand";
import {
  SliceIntersection,
  Validation,
  ValidationSlice,
} from "../formEditorStore.types";

const initialValidation: Validation = {};

const validationSlice: StateCreator<
  SliceIntersection,
  [],
  [],
  ValidationSlice
> = (set) => ({
  validation: initialValidation,
  updateValidation: (payload) =>
    set((state) => ({
      validation: {
        ...state.validation,
        ...payload,
      },
    })),
});

export { validationSlice };
