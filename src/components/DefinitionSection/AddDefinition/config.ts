import { PayloadAdd } from "../../../store/formEditorStore.types";

const addConfig: { id: string; label: string; payload: PayloadAdd }[] = [
  {
    id: "add-text",
    label: "Text",
    payload: {
      id: "1",
      name: "1",
      definitionType: "TextField",
      type: "text",
    },
  },
  {
    id: "add-select",
    label: "Select",
    payload: {
      id: "2",
      name: "2",
      definitionType: "Select",
      type: "select",
    },
  },
  {
    id: "add-date",
    label: "Date",
    payload: {
      id: "3",
      name: "3",
      definitionType: "DateTime",
      type: "date",
    },
  },
];

export { addConfig };
