import { render } from "@testing-library/react";
import { EditFieldDefinition } from "./EditFieldDefinition";
import { FieldBlockDefinition } from "../../../shared/types";

const definition: FieldBlockDefinition = {
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
