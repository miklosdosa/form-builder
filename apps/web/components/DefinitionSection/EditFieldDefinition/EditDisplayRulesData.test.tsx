import { render } from "@testing-library/react";
import { EditDisplayRulesData } from "./EditDisplayRulesData";
import { FieldDefinition } from "@repo/schemas-types";

const definition: FieldDefinition = {
  definitionType: "TextField",
  id: "id",
  name: "name",
  type: "text",
};

describe("EditDisplayRulesData", () => {
  it("should render properly", () => {
    render(<EditDisplayRulesData definition={definition} />);
  });
});
