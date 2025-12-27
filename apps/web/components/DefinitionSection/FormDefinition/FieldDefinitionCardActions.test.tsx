import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { FieldDefinitionCardActions } from "./FieldDefinitionCardActions";
import { useBoundStore } from "../../../store/formEditorStore";
import { publish } from "../../../events";

// Mock dependencies
vi.mock("../../../store/formEditorStore", () => ({
  useBoundStore: vi.fn(),
}));

vi.mock("../../../events", () => ({
  publish: vi.fn(),
}));

describe("FieldDefinitionCardActions", () => {
  const mockSetFieldUnderEdit = vi.fn();
  const mockDeleteField = vi.fn();
  const mockPublish = publish as unknown as ReturnType<typeof vi.fn>;

  const renderComponent = (
    fieldUnderEdit: string | null,
    definitionId = "test-id"
  ) => {
    (useBoundStore as any).mockImplementation((selector: any) =>
      selector({
        deleteField: mockDeleteField,
        setFieldUnderEdit: mockSetFieldUnderEdit,
        fieldUnderEdit,
      })
    );

    render(<FieldDefinitionCardActions definitionId={definitionId} />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show Edit and Delete buttons when not editing", () => {
    renderComponent("another-id");

    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /cancel/i })
    ).not.toBeInTheDocument();
  });

  it("should show only Cancel button when editing", () => {
    renderComponent("test-id");

    expect(
      screen.queryByRole("button", { name: /edit/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /remove/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it("should call setFieldUnderEdit directly if no field is under edit", () => {
    renderComponent(null);

    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);

    expect(mockSetFieldUnderEdit).toHaveBeenCalledWith("test-id");
    expect(mockPublish).not.toHaveBeenCalled();
  });

  it("should call publish with onLeaveForm if a field is already being edited", () => {
    renderComponent("another-id");

    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);

    expect(mockPublish).toHaveBeenCalledWith("onLeaveForm", {
      proceed: expect.any(Function),
    });

    // Simulate proceed being called
    const args = mockPublish.mock.calls[0][1];
    args.proceed();
    expect(mockSetFieldUnderEdit).toHaveBeenCalledWith("test-id");
  });

  it("should call deleteField with the correct id when clicking delete", () => {
    renderComponent(null);

    const deleteButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(deleteButton);

    expect(mockDeleteField).toHaveBeenCalledWith({ id: "test-id" });
  });

  it("should call publish and setFieldUnderEdit(null) when clicking cancel", () => {
    renderComponent("test-id");

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(mockPublish).toHaveBeenCalledWith("onLeaveForm", {
      proceed: expect.any(Function),
    });

    const args = mockPublish.mock.calls[0][1];
    args.proceed();
    expect(mockSetFieldUnderEdit).toHaveBeenCalledWith(null);
  });
});
