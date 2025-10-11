import { render } from "@testing-library/react";
import { TabDisplay } from "./TabDisplay";

describe("TabDisplay", () => {
  it("should render properly", () => {
    render(
      <TabDisplay
        tabs={[
          { label: "Tab 1", panel: <div>Panel 1</div> },
          { label: "Tab 2", panel: <div>Panel 2</div> },
        ]}
      />
    );
  });
});
