import { render } from "@testing-library/react";
import { CheckboxGroupBlock } from "./CheckboxGroupBlock";
import { FieldBlockFormProvider } from "../FieldBlockFormProvider";
import { FieldBlockDefinition } from "../../types";

describe("CheckboxGroupBlock", () => {
  it("should render properly", () => {
    const definition: FieldBlockDefinition = {
      definitionType: "Select",
      multiple: true,
      id: "checkboxgroup",
      name: "checkboxgroup",
      type: "checkbox",
      label: "label",
      options: [
        {
          name: "set 1",
          values: [
            {
              id: "1",
              label: "1",
              value: "1",
            },
            {
              id: "2",
              label: "2",
              value: "2",
            },
          ],
        },
      ],
    };
    const options = [
      {
        id: "1",
        label: "1",
        value: "1",
      },
      {
        id: "2",
        label: "2",
        value: "2",
      },
    ];
    render(
      <FieldBlockFormProvider>
        <CheckboxGroupBlock definition={definition} options={options} />
      </FieldBlockFormProvider>
    );
  });
});
