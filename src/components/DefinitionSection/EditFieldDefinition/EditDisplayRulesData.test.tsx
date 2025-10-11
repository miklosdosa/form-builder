import { render } from "@testing-library/react";
import { EditDisplayRulesData } from "./EditDisplayRulesData";
import { FieldBlockDefinition } from "../../../shared/types";

const definition: FieldBlockDefinition = {
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
