import { create } from "zustand";
import { formDefinitionSlice } from "./slices/formDefinitionSlice";
import { validationSlice } from "./slices/validationSlice";
import { SliceIntersection } from "./formEditorStore.types";
import { displaySlice } from "./slices/displaySlice";
import { layoutSlice } from "./slices/layoutSlice";
import { formStepSlice } from "./slices/formStepSlice";

export const useBoundStore = create<SliceIntersection>((...a) => ({
  ...formDefinitionSlice(...a),
  ...validationSlice(...a),
  ...displaySlice(...a),
  ...layoutSlice(...a),
  ...formStepSlice(...a),
}));
