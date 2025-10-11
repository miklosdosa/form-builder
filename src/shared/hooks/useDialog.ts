import { createContext, useContext } from "react";

type DialogData = {
  title: string;
  content?: string;
  closeButton: string;
  closeAction?: () => void;
  actions?: {
    buttonLabel: string;
    cb?: () => void;
  }[];
};

const Dialog = createContext({
  confirm: (data: DialogData) => new Promise<void>(() => data.title),
  terminate: () => {
    return;
  },
});

const useDialog = () => {
  return useContext(Dialog);
};

export { useDialog, Dialog };
export type { DialogData };
