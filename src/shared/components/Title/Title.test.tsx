import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("should render properly", () => {
    render(<Title main="Main title" />);
  });
  it("should render the subtitle", () => {
    render(<Title main="Main title" sub="Subtitle" />);
  });
});
