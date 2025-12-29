"use client";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { DialogContext } from "./context";
import { Button } from "../Button";
import { DialogData } from "./types";

const ActionDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<DialogData & { isOpen: boolean }>({
    isOpen: false,
    fullScreen: false,
    title: "",
    content: "",
    closeButton: "",
    actions: [],
  });
  const fn = useRef<(cb?: () => void) => void>();

  const open = useCallback(
    (data: DialogData) => {
      return new Promise<void>((resolve) => {
        setState({ ...data, isOpen: true });
        fn.current = (cb) => {
          cb?.();
          resolve();
          setState((prev) => ({ ...prev, isOpen: false }));
        };
      });
    },
    [setState]
  );

  const terminate = useCallback(() => {
    fn.current?.();
  }, []);

  return (
    <DialogContext.Provider value={{ open, terminate }}>
      {children}
      <Dialog
        id="confirm-dialog"
        maxWidth="md"
        fullScreen={state.fullScreen}
        open={state.isOpen}
        PaperProps={{ sx: { overflow: "visible" } }}
      >
        {state.title && <DialogTitle>{state.title}</DialogTitle>}
        <DialogContent id="confirm-dialog-content" dividers>
          {typeof state.content === "string" ? (
            state.content
          ) : state.content ? (
            <state.content />
          ) : null}
        </DialogContent>
        <DialogActions
          id="confirm-dialog-actions"
          sx={{ justifyContent: "space-between" }}
        >
          <Button
            onClick={() => fn.current?.(state.closeAction)}
            variant="outlined"
            label={state.closeButton}
          />
          {state.actions && (
            <Stack direction="row" spacing={1}>
              {state.actions.map((a, i) => {
                return (
                  <Button
                    key={i}
                    onClick={() => fn.current?.(a.cb)}
                    variant="contained"
                    label={a.buttonLabel}
                  />
                );
              })}
            </Stack>
          )}
        </DialogActions>
      </Dialog>
    </DialogContext.Provider>
  );
};

export { ActionDialogProvider };
