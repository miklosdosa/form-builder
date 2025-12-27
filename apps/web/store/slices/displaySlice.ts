import { StateCreator } from "zustand";
import {
  SliceIntersection,
  Display,
  DisplaySlice,
} from "../formEditorStore.types";

const initialDisplay: Display = {};

const displaySlice: StateCreator<SliceIntersection, [], [], DisplaySlice> = (
  set
) => ({
  display: initialDisplay,
  updateDisplay: (payload) =>
    set((state) => ({
      display: {
        ...state.display,
        ...payload,
      },
    })),
});

export { displaySlice };
