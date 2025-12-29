import { createContext } from "react";
import { DialogData } from "./types";

const DialogContext = createContext({
  open: (data: DialogData) => new Promise<void>(() => data.title),
  terminate: () => {
    return;
  },
});

export { DialogContext };
