import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("should render properly", () => {
    render(<Icon name="AddCircle" />);
  });
});
