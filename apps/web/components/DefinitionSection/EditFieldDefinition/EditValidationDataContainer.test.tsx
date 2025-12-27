import { render } from "@testing-library/react";
import { EditValidationDataContainer } from "./EditValidationDataContainer";

describe("EditValidationData", () => {
  it("should render properly", () => {
    render(
      <EditValidationDataContainer
        definition={{
          definitionType: "TextField",
          id: "id",
          name: "name",
          type: "text",
        }}
      />
    );
  });
});
