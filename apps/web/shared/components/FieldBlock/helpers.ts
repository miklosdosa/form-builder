import { FieldDisplayRules, FormValueCondition } from "@repo/schemas-types";

const evaluateConditions = (
  conditions: FormValueCondition[][],
  watch: (fieldName: string) => any,
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
        .every((ir) => !!ir),
    )
    .some((r) => !!r);

const loopRules = (
  rules: FieldDisplayRules[],
  watch: (fieldName: string) => any,
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

const filterRulesByType = (
  type: "disabled" | "readOnly" | "optionSet" | "arrayDirection",
  rules?: FieldDisplayRules[],
) => {
  if (!rules) {
    return [];
  }
  return rules.filter((r) => r.type === type);
};

const evaluate = (
  type: "disabled" | "readOnly" | "optionSet" | "arrayDirection",
  watch: (fieldName: string) => any,
  rules?: FieldDisplayRules[],
) => {
  const filteredRules = filterRulesByType(type, rules);

  if (filteredRules.length === 0) {
    return false;
  }

  const returnValue = loopRules(filteredRules, watch);

  return returnValue;
};

const booleanEvaluate = (
  type: "disabled" | "readOnly",
  watch: (fieldName: string) => any,
  rules?: FieldDisplayRules[],
) => {
  const res = evaluate(type, watch, rules) as boolean | undefined;

  return res ?? false;
};

const stringEvaluate = (
  type: "optionSet" | "arrayDirection",
  watch: (fieldName: string) => any,
  rules?: FieldDisplayRules[],
) => {
  const res = evaluate(type, watch, rules) as string | undefined;

  return res;
};

export { evaluateConditions, booleanEvaluate, stringEvaluate };
