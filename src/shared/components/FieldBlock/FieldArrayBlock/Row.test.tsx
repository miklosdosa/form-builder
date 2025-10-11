import { render } from "@testing-library/react";
import { Row } from "./Row";
import { FormDefinition } from "../../../types";
import { FieldBlockFormProvider } from "../../FieldBlockFormProvider";

describe("Row", () => {
  it("should render properly", () => {
    const definition: FormDefinition = [
      {
        id: "1",
        name: "name",
        definitionType: "TextField",
        type: "text",
      },
      {
        id: "2",
        name: "name2",
        definitionType: "TextField",
        type: "text",
      },
    ];

    const mockOnRemove = () => {
      return;
    };

    render(
      <FieldBlockFormProvider>
        <Row
          name="test"
          definition={definition}
          index={1}
          onRemove={mockOnRemove}
        />
      </FieldBlockFormProvider>
    );
  });
});
