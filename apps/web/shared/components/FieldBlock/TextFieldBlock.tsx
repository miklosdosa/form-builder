import { useFormContext } from "react-hook-form";
import { memo } from "react";
import { TextFieldBlockProps } from "./FieldBlock.types";
import { TextField } from "@repo/ui";
import { useDisplayRulesEvaluate, useError } from "./hooks";

const TextFieldBlock = memo(
  ({ name, definition, displayRules }: TextFieldBlockProps) => {
    const { register } = useFormContext();
    const { hasError, message } = useError(name ?? definition.name);
    const { isReadOnly, isDisabled } = useDisplayRulesEvaluate(displayRules);
    const {
      label,
      placeholder,
      type,
      defaultValue,
      name: definitionName,
    } = definition;

    return (
      <TextField
        label={label}
        placeholder={placeholder}
        type={type}
        readOnly={isReadOnly}
        defaultValue={defaultValue}
        helperText={message}
        error={hasError}
        {...register(name ?? definitionName, { disabled: isDisabled })}
      />
    );
  },
);

export { TextFieldBlock };
