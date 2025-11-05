import { StateCreator } from "zustand";
import {
  SliceIntersection,
  FormStep,
  FormStepSlice,
} from "../formEditorStore.types";
import { generate } from "short-uuid";

const initialSteps: FormStep[] = [
  {
    id: "initial_step",
    name: "Default step",
  },
];

const formStepSlice: StateCreator<SliceIntersection, [], [], FormStepSlice> = (
  set
) => ({
  steps: initialSteps,
  selectedStep: initialSteps[0].id,
  addStep: (payload) =>
    set((state) => {
      const id = generate();
      return {
        steps: [
          ...state.steps,
          {
            id,
            name: payload.name,
          },
        ],
        definitions: {
          ...state.definitions,
          [id]: [],
        },
      };
    }),
  setSelectedStep: (id) => set(() => ({ selectedStep: id })),
});

export { formStepSlice };
