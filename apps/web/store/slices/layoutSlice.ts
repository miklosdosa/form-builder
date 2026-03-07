import { StateCreator } from "zustand";
import { SliceIntersection, LayoutSlice } from "../formEditorStore.types";
import { FormStepLayouts } from "@repo/schemas-types";

const initialLayouts: FormStepLayouts = {
  initial_step: [],
};

const layoutSlice: StateCreator<SliceIntersection, [], [], LayoutSlice> = (
  set
) => ({
  layouts: initialLayouts,
  updateLayout: (payload) =>
    set((state) => ({
      layouts: {
        ...state.layouts,
        [state.selectedStep]: [...payload],
      },
    })),
});

export { layoutSlice };
