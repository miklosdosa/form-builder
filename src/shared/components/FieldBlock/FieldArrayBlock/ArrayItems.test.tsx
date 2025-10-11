import { render } from "@testing-library/react";
import { ArrayItems } from "./ArrayItems";
import { FormDefinition } from "../../../types";
import { FieldBlockFormProvider } from "../../FieldBlockFormProvider";

describe("ArrayItems", () => {
  it("should render properly", () => {
    const fields = [
      {
        id: "e389b4d0-06f4-46bf-b733-6829cbe9d258",
        label: "1",
        value: "1",
      },
      {
        id: "5102acb1-1c31-485c-a5be-61ed4eaca254",
        label: "1",
        value: "1",
      },
    ];

    const itemFormDefinition: FormDefinition = [
      {
        id: "1",
        name: "1",
        definitionType: "TextField",
        type: "text",
      },
    ];
    render(
      <FieldBlockFormProvider>
        <ArrayItems
          fields={fields}
          arrayItemDirection="row"
          arrayItemRemoveLabel="Remove"
          arrayName="array"
          handleItemRemove={() => {}}
          itemFormDefinition={itemFormDefinition}
        />
      </FieldBlockFormProvider>
    );
  });
});
