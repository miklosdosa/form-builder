import { ComponentType } from "react";

type DialogData = {
  title: string;
  content?: ComponentType | string;
  fullScreen?: boolean;
  closeButton: string;
  closeAction?: () => void;
  actions?: { buttonLabel: string; cb?: () => void }[];
};

export type { DialogData };
