import { Controller, useFormContext } from "react-hook-form";
import { getObjectValue } from "../../../utils";
import { memo } from "react";
import { DatePickerBlockProps } from "./FieldBlock.types";
import { SimpleDate } from "../Fields/DatePicker";

const DatePickerBlock = memo(({ name, definition }: DatePickerBlockProps) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  const {
    label,
    // type,
    //readonly,
    defaultValue,
    name: definitionName,
    //required,
  } = definition;

  const error = getObjectValue(errors, name ?? definitionName);

  return (
    <Controller
      name={definition.name}
      control={control}
      render={({ field }) => {
        const { onChange } = field;
        const handleChange = (date: Date | null) => {
          onChange(date);
        };

        return (
          <SimpleDate
            onChange={handleChange}
            defaultValue={defaultValue}
            inputProps={{
              label,
              error: !!error?.message,
              helperText: error?.message as string,
            }}
          />
        );
      }}
    />
  );
});

export { DatePickerBlock };
