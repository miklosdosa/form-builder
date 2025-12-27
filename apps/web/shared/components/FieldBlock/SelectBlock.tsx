import { Controller, useFormContext } from "react-hook-form";
import { SelectBlockProps } from "./FieldBlock.types";
import { FieldGroup } from "../FieldGroup";
import { CheckboxGroupBlock } from "./CheckboxGroupBlock";
import { stringEvaluate } from "./helpers";
import { Radio, Select } from "@repo/ui";

const SelectBlock = ({ definition, displayRules }: SelectBlockProps) => {
  const { control, watch } = useFormContext();

  const getOptions = () => {
    const setRules = displayRules;
    const defOptionSet = definition.options;
    if (!defOptionSet) {
      return [];
    }

    const optionSetName = stringEvaluate("optionSet", watch, setRules);

    return (
      defOptionSet.find((o) => o.name === optionSetName)?.values ??
      defOptionSet[0]?.values ??
      []
    );
  };

  const options = getOptions();

  switch (definition.type) {
    case "radio":
      return (
        <FieldGroup label={definition.label}>
          {options.map((option) => (
            <Controller
              name={definition.name}
              control={control}
              render={({ field }) => (
                <Radio
                  label={option.label}
                  {...field}
                  value={option.value}
                />
              )}
            />
          ))}
        </FieldGroup>
      );
    case "checkbox":
      return <CheckboxGroupBlock definition={definition} options={options} />;
    case "select":
    case "multi-select":
      return (
        <Controller
          name={definition.name}
          control={control}
          render={({ field }) => (
            <Select
              label={definition.label}
              options={options}
              multiple={definition.type === "multi-select"}
              // disabled={definition.disabled}
              {...field}
              /* {...register(name ?? definition.name, {
            required: {
              value: definition.required ?? false,
              message: "Required",
            },
            disabled: definition.disabled,
          })} */
            />
          )}
        />
      );
    default:
      return <div />;
  }
};

export { SelectBlock };
