import { create } from "zustand";
import { formDefinitionSlice } from "./slices/formDefinitionSlice";
import { validationSlice } from "./slices/validationSlice";
import {
  DisplaySlice,
  FormDefinitionSlice,
  LayoutSlice,
  ValidationSlice,
} from "./formEditorStore.types";
import { displaySlice } from "./slices/displaySlice";
import { layoutSlice } from "./slices/layoutSlice";

export const useBoundStore = create<
  FormDefinitionSlice & ValidationSlice & DisplaySlice & LayoutSlice
>((...a) => ({
  ...formDefinitionSlice(...a),
  ...validationSlice(...a),
  ...displaySlice(...a),
  ...layoutSlice(...a),
}));
