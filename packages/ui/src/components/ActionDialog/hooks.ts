"use client";
import { useContext } from "react";
import { DialogContext } from "./context";

const useDialog = () => {
  return useContext(DialogContext);
};

export { useDialog };
