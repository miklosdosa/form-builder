import { useFormContext } from "react-hook-form";
import { getObjectValue } from "../../../utils";
import { memo } from "react";
import { TextFieldBlockProps } from "./FieldBlock.types";
import { booleanEvaluate } from "./helpers";
import { TextField } from "@repo/ui";

const TextFieldBlock = memo(
  ({ name, definition, displayRules }: TextFieldBlockProps) => {
    const { register, formState, watch } = useFormContext();
    const { errors } = formState;
    const {
      label,
      placeholder,
      type,
      defaultValue,
      name: definitionName,
    } = definition;

    const error = getObjectValue(errors, name ?? definitionName);
    const readOnly = booleanEvaluate("readOnly", watch, displayRules);
    const disabled = booleanEvaluate("disabled", watch, displayRules);

    return (
      <TextField
        label={label}
        placeholder={placeholder}
        type={type}
        readOnly={readOnly}
        defaultValue={defaultValue}
        helperText={error?.message as string}
        error={!!error?.message}
        {...register(name ?? definitionName, { disabled })}
      />
    );
  }
);

export { TextFieldBlock };
