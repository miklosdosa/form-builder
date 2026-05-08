import { Controller, useFormContext } from "react-hook-form";
import { BooleanBlockProps } from "./FieldBlock.types";
import { Checkbox } from "@repo/ui";

const BooleanBlock = ({ definition, name }: BooleanBlockProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name ?? definition.name}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;
        return (
          <Checkbox
            label={definition.option.label}
            {...field}
            checked={!!value}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
          />
        );
      }}
    />
  );
};

export { BooleanBlock };
