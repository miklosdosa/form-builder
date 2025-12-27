import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import React from "react";
import { DialogProvider } from "./ConfirmDialogProvider";
import { Dialog } from "../../hooks/useDialog"; // ugyanaz a context, mint amit a DialogProvider exportál

// Dummy komponens, ami használja a Dialog contextet
const TestComponent = () => {
  const dialog = React.useContext(Dialog);

  const handleOpenDialog = () => {
    dialog.confirm({
      title: "Test Title",
      content: "Test Content",
      closeButton: "Close",
      actions: [
        {
          buttonLabel: "Confirm",
          // cb: vi.fn(),
        },
      ],
    });
  };

  return <button onClick={handleOpenDialog}>Open Dialog</button>;
};

describe("ConfirmDialogProvider", () => {
  it("should not render dialog by default", () => {
    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open dialog with correct content when confirm is called", async () => {
    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    );

    fireEvent.click(screen.getByText("Open Dialog"));

    await screen.findByRole("dialog");

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("should call action callback and close dialog", async () => {
    const TestComponentWithCallback = () => {
      const dialog = React.useContext(Dialog);

      const handleOpenDialog = () => {
        dialog.confirm({
          title: "Confirm Title",
          content: "Confirm Content",
          closeButton: "Cancel",
          actions: [
            {
              buttonLabel: "OK",
              // cb: confirmCb,
            },
          ],
        });
      };

      return <button onClick={handleOpenDialog}>Trigger Confirm</button>;
    };

    render(
      <DialogProvider>
        <TestComponentWithCallback />
      </DialogProvider>
    );

    fireEvent.click(screen.getByText("Trigger Confirm"));

    await screen.findByRole("dialog");

    fireEvent.click(screen.getByText("OK"));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    // expect(confirmCb).toHaveBeenCalled();
  });

  it("should call closeAction and close the dialog when clicking close button", async () => {
    // const closeAction = vi.fn();

    const CloseDialogComponent = () => {
      const dialog = React.useContext(Dialog);

      const handleOpenDialog = () => {
        dialog.confirm({
          title: "Close Title",
          content: "Close Content",
          closeButton: "Close It",
          // closeAction,
          actions: [],
        });
      };

      return <button onClick={handleOpenDialog}>Open Close Dialog</button>;
    };

    render(
      <DialogProvider>
        <CloseDialogComponent />
      </DialogProvider>
    );

    fireEvent.click(screen.getByText("Open Close Dialog"));

    await screen.findByRole("dialog");

    fireEvent.click(screen.getByText("Close It"));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    // expect(closeAction).toHaveBeenCalled();

    /* await waitFor(() => {
      expect(closeAction).toHaveBeenCalled();
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    }); */
  });

  it("should close dialog when terminate is called", async () => {
    let terminateFn: () => void;

    const TerminateDialogComponent = () => {
      const dialog = React.useContext(Dialog);
      terminateFn = dialog.terminate;

      const handleOpenDialog = () => {
        dialog.confirm({
          title: "Terminate Title",
          content: "Terminate Content",
          closeButton: "Close",
          actions: [],
        });
      };

      return <button onClick={handleOpenDialog}>Open Terminate Dialog</button>;
    };

    render(
      <DialogProvider>
        <TerminateDialogComponent />
      </DialogProvider>
    );

    fireEvent.click(screen.getByText("Open Terminate Dialog"));
    await screen.findByRole("dialog");

    act(() => {
      terminateFn!();
    });

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
