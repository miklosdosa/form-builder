import { StateCreator } from "zustand";
import { SliceIntersection, LayoutSlice } from "../formEditorStore.types";
import { FormDefinitionLayouts } from "../../shared/types";

const initialLayouts: FormDefinitionLayouts = {
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
