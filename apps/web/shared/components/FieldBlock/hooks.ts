import { FieldDisplayRules } from "@repo/schemas-types";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { booleanEvaluate } from "./helpers";

export const useDisplayRulesEvaluate = (displayRules?: FieldDisplayRules[]) => {
  const { watch } = useFormContext();

  const watcher = useCallback((fieldName: string) => watch(fieldName), [watch]);

  const isReadOnly = booleanEvaluate("readOnly", watcher, displayRules);
  const isDisabled = booleanEvaluate("disabled", watcher, displayRules);

  return {
    isReadOnly,
    isDisabled,
  };
};
