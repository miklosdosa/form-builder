import { render } from "@testing-library/react";
import { FieldBlock } from "./FieldBlock";
import { FieldBlockDefinition } from "../../types";
import { FieldBlockFormProvider } from "../FieldBlockFormProvider";

describe("FieldBlock", () => {
  it("should render TextField block", () => {
    const definition: FieldBlockDefinition = {
      id: "textField",
      name: "textField",
      definitionType: "TextField",
      type: "text",
    };

    render(
      <FieldBlockFormProvider>
        <FieldBlock definition={definition} />
      </FieldBlockFormProvider>
    );
  });
  it("should render Select block", () => {
    const definition: FieldBlockDefinition = {
      id: "selectField",
      name: "selectField",
      definitionType: "Select",
      type: "select",
      multiple: false,
      options: [
        {
          name: "optionSet",
          values: [{ id: "opt1", label: "opt1", value: "opt1" }],
        },
      ],
    };

    render(
      <FieldBlockFormProvider>
        <FieldBlock definition={definition} />
      </FieldBlockFormProvider>
    );
  });
  it("should render Boolean block", () => {
    const definition: FieldBlockDefinition = {
      id: "bool",
      name: "bool",
      definitionType: "Boolean",
      type: "boolean",
      option: { id: "opt", label: "opt", value: "opt" },
    };

    render(
      <FieldBlockFormProvider>
        <FieldBlock definition={definition} />
      </FieldBlockFormProvider>
    );
  });
  it("should render FieldArray block", () => {
    const definition: FieldBlockDefinition = {
      id: "fieldArray",
      name: "fieldArray",
      definitionType: "FieldArray",
      type: "array",
      fields: [
        {
          definitionType: "TextField",
          id: "1",
          name: "name",
          type: "text",
        },
        {
          definitionType: "TextField",
          id: "2",
          name: "name2",
          type: "text",
        },
      ],
    };

    render(
      <FieldBlockFormProvider>
        <FieldBlock definition={definition} />
      </FieldBlockFormProvider>
    );
  });
});
