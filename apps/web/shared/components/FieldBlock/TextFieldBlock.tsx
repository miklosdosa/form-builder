import { useFormContext } from "react-hook-form";
import { getObjectValue } from "../../../utils";
import { memo } from "react";
import { TextFieldBlockProps } from "./FieldBlock.types";
import { TextField } from "@repo/ui";
import { useDisplayRulesEvaluate } from "./hooks";

const TextFieldBlock = memo(
  ({ name, definition, displayRules }: TextFieldBlockProps) => {
    const { register, formState } = useFormContext();
    const { errors } = formState;
    const {
      label,
      placeholder,
      type,
      defaultValue,
      name: definitionName,
    } = definition;

    const { isReadOnly, isDisabled } = useDisplayRulesEvaluate(displayRules);

    const error = getObjectValue(errors, name ?? definitionName);

    return (
      <TextField
        label={label}
        placeholder={placeholder}
        type={type}
        readOnly={isReadOnly}
        defaultValue={defaultValue}
        helperText={error?.message as string}
        error={!!error?.message}
        {...register(name ?? definitionName, { disabled: isDisabled })}
      />
    );
  },
);

export { TextFieldBlock };
