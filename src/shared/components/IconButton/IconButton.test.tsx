import { render } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("should render properly", () => {
    render(<IconButton iconName="AddCircle" />);
  });
});
