import { render } from "@testing-library/react";
import { EditFieldDefinition } from "./EditFieldDefinition";
import { FieldDefinition } from "@repo/schemas-types";

const definition: FieldDefinition = {
  definitionType: "TextField",
  id: "id",
  name: "name",
  type: "text",
};

describe("EditFieldDefinition", () => {
  it("should render properly", () => {
    render(<EditFieldDefinition definition={definition} />);
  });
});
