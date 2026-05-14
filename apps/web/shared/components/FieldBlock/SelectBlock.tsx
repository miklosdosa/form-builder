import { Controller, useFormContext } from "react-hook-form";
import { SelectBlockProps } from "./FieldBlock.types";
import { FieldGroup } from "../FieldGroup";
import { CheckboxGroupBlock } from "./CheckboxGroupBlock";
import { Radio, Select } from "@repo/ui";
import { useOptions } from "./hooks";

const SelectBlock = ({ definition, displayRules }: SelectBlockProps) => {
  const { control } = useFormContext();
  const options = useOptions(definition.options, displayRules);

  switch (definition.type) {
    case "radio":
      return (
        <FieldGroup label={definition.label}>
          {options.map((option) => (
            <Controller
              name={definition.name}
              control={control}
              render={({ field }) => (
                <Radio label={option.label} {...field} value={option.value} />
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
