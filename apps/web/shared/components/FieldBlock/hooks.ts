import { FieldDisplayRules, OptionSet } from "@repo/schemas-types";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { booleanEvaluate, stringEvaluate } from "./helpers";
import { getObjectValue } from "../../../utils";

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

export const useError = (fieldName: string) => {
  const { formState } = useFormContext();
  const { errors } = formState;

  const error = getObjectValue(errors, fieldName);

  return {
    hasError: !!error?.message,
    message: error?.message as string | undefined,
  };
};

export const useOptions = (
  optionSet: OptionSet[],
  displayRules?: FieldDisplayRules[],
) => {
  const { watch } = useFormContext();

  if (!optionSet) {
    return [];
  }

  const optionSetName = stringEvaluate("optionSet", watch, displayRules);

  return (
    optionSet.find((o) => o.name === optionSetName)?.values ??
    optionSet[0]?.values ??
    []
  );
};
