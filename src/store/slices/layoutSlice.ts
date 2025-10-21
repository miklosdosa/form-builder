import { StateCreator } from "zustand";
import { SliceIntersection, LayoutSlice } from "../formEditorStore.types";
import { LayoutDefinition } from "../../shared/types";

const initialLayout: LayoutDefinition = [];

const layoutSlice: StateCreator<SliceIntersection, [], [], LayoutSlice> = (
  set
) => ({
  layout: initialLayout,
  updateLayout: (payload) =>
    set(() => ({
      layout: [...payload],
    })),
});

export { layoutSlice };
