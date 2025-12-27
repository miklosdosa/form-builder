import { render } from "@testing-library/react";
import { FieldDefinitionCard } from "./FieldDefinitionCard";
import { FieldBlockDefinition } from "../../../shared/types";

describe("FieldDefinitionCard", () => {
  it("should render properly", () => {
    const definition: FieldBlockDefinition = {
      id: "1",
      name: "name",
      type: "text",
      definitionType: "TextField",
    };
    render(<FieldDefinitionCard definition={definition} />);
  });
});
