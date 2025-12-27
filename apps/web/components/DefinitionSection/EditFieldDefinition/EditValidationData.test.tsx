import { render } from "@testing-library/react";
import { EditValidationData } from "./EditValidationData";

describe("EditValidationData", () => {
  it("should render properly", () => {
    render(
      <EditValidationData
        fieldBlockName="name"
        initFormDefinition={[
          { definitionType: "TextField", id: "id", name: "name", type: "text" },
        ]}
        update={() => {}}
        initialValues={[{ type: "required", errorMessage: "errorMessage" }]}
      />
    );
  });
});
