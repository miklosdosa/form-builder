import { create } from "zustand";
import { formDefinitionSlice } from "./slices/formDefinitionSlice";
import { validationSlice } from "./slices/validationSlice";
import {
  DisplaySlice,
  FormDefinitionSlice,
  ValidationSlice,
} from "./formEditorStore.types";
import { displaySlice } from "./slices/displaySlice";

export const useBoundStore = create<
  FormDefinitionSlice & ValidationSlice & DisplaySlice
>((...a) => ({
  ...formDefinitionSlice(...a),
  ...validationSlice(...a),
  ...displaySlice(...a),
}));
