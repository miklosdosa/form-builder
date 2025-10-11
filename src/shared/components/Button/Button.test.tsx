import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render properly", () => {
    render(<Button label="Button label" />);
  });
});
