import { Controller, useFormContext } from "react-hook-form";
import { memo } from "react";
import { DatePickerBlockProps } from "./FieldBlock.types";
import { SingleDatePicker } from "@repo/ui";
import { useError } from "./hooks";

const DatePickerBlock = memo(({ name, definition }: DatePickerBlockProps) => {
  const { control } = useFormContext();
  const { hasError, message } = useError(name ?? definition.name);
  const {
    label,
    // type,
    //readonly,
    defaultValue,
    name: definitionName,
    //required,
  } = definition;

  return (
    <Controller
      name={definitionName}
      control={control}
      render={({ field }) => {
        const { onChange } = field;
        const handleChange = (date: Date | null) => {
          onChange(date);
        };

        return (
          <SingleDatePicker
            onChange={handleChange}
            defaultValue={defaultValue}
            inputProps={{
              label,
              error: hasError,
              helperText: message,
            }}
          />
        );
      }}
    />
  );
});

export { DatePickerBlock };
