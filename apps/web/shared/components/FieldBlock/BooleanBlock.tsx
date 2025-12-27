import { Controller, useFormContext } from "react-hook-form";
import { CheckboxField } from "../Fields";
import { BooleanBlockProps } from "./FieldBlock.types";

const BooleanBlock = ({ definition, name, auxOnChange }: BooleanBlockProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name ?? definition.name}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;
        return (
          <CheckboxField
            label={definition.option.label}
            {...field}
            checked={!!value}
            onChange={(e) => {
              onChange(e.target.checked);
              auxOnChange?.(e.target.checked);
            }}
          />
        );
      }}
    />
  );
};

export { BooleanBlock };
