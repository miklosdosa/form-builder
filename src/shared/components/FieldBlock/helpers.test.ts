import { vi } from "vitest";
import { evaluateConditions } from "./helpers";
import { FormValueCondition } from "../../types";
import { FieldValues, UseFormWatch } from "react-hook-form";

function createMockWatch(
  values: Record<string, any>
): UseFormWatch<FieldValues> {
  return ((field: string) => values[field]) as UseFormWatch<FieldValues>;
}

describe("evaluateConditions", () => {
  it("should return true when all conditions are met", () => {
    const watch = createMockWatch({ age: 18, country: "HU" });

    const conditions: FormValueCondition[][] = [
      [
        { field: "age", condition: "eq", value: 18 },
        { field: "country", condition: "eq", value: "HU" },
      ],
    ];

    expect(evaluateConditions(conditions, watch)).toBe(true);
  });

  it("should return false if one condition group fails", () => {
    const watch = createMockWatch({ age: 11, country: "DE" });

    const conditions: FormValueCondition[][] = [
      [
        { field: "age", condition: "eq", value: 18 },
        { field: "country", condition: "eq", value: "HU" },
      ],
    ];

    expect(evaluateConditions(conditions, watch)).toBe(false);
  });

  it("should return true if any condition group passes", () => {
    const watch = createMockWatch({ a: 1, b: 2, c: 3 });

    const conditions: FormValueCondition[][] = [
      [{ field: "a", condition: "eq", value: 0 }],
      [
        { field: "b", condition: "eq", value: 2 },
        { field: "c", condition: "eq", value: 3 },
      ],
    ];

    expect(evaluateConditions(conditions, watch)).toBe(true);
  });
});
