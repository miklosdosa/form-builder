import { FieldValues, UseFormWatch } from "react-hook-form";
import { FieldDisplayRules, FormValueCondition } from "../../types";

const evaluateConditions = (
  conditions: FormValueCondition[][],
  watch: UseFormWatch<FieldValues>
) =>
  conditions
    .map((c) =>
      c
        .map((ci) => {
          const { field, condition, value } = ci;
          const dependentFieldValue = watch(field);
          switch (condition) {
            case "eq":
              return dependentFieldValue === value;
            default:
              return false;
          }
        })
        .every((ir) => !!ir)
    )
    .some((r) => !!r);

const loopRules = (
  rules: FieldDisplayRules[],
  watch: UseFormWatch<FieldValues>
) => {
  let i = 0;
  let returnValue: string | boolean | undefined = undefined;

  do {
    const { conditions, value } = rules[i];

    if (typeof conditions === "boolean") {
      returnValue = conditions ? value : undefined;
    } else {
      returnValue = evaluateConditions(conditions, watch) ? value : undefined;
    }

    i += 1;
  } while (i < rules.length && returnValue === undefined);

  return returnValue;
};

const booleanEvaluate = (
  type: "disabled" | "readOnly",
  watch: UseFormWatch<FieldValues>,
  rules?: FieldDisplayRules[]
) => {
  const filteredRules = rules?.filter((r) => r.type === type);

  if (!filteredRules || filteredRules.length === 0) {
    return false;
  }

  const returnValue = loopRules(filteredRules, watch) as boolean | undefined;

  return returnValue !== undefined ? returnValue : false;
};

const stringEvaluate = (
  type: "optionSet" | "arrayDirection",
  watch: UseFormWatch<FieldValues>,
  rules?: FieldDisplayRules[]
) => {
  const filteredRules = rules?.filter((r) => r.type === type);

  if (!filteredRules || filteredRules.length === 0) {
    return undefined;
  }

  const returnValue = loopRules(filteredRules, watch) as string | undefined;

  return returnValue;
};

export { evaluateConditions, booleanEvaluate, stringEvaluate };
