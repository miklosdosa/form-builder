import { render } from "@testing-library/react";
import { FieldDefinitionCard } from "./FieldDefinitionCard";
import { FieldDefinition } from "@repo/schemas-types";

describe("FieldDefinitionCard", () => {
  it("should render properly", () => {
    const definition: FieldDefinition = {
      id: "1",
      name: "name",
      type: "text",
      definitionType: "TextField",
    };
    render(<FieldDefinitionCard definition={definition} />);
  });
});
