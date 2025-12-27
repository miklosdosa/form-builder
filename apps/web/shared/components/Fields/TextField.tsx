import { forwardRef, InputHTMLAttributes, memo } from "react";
import { TextField as MuiTextField } from "@mui/material";

type TextFieldProps = {
  label?: string;
  helperText?: string;
  error?: boolean;
  readOnly?: boolean;
};

const TextField = memo(
  forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement> & TextFieldProps
  >(({ label, error, helperText, readOnly, ...rest }, ref) => (
    <MuiTextField
      size="small"
      label={label}
      error={error}
      fullWidth
      helperText={helperText}
      inputRef={ref}
      disabled={rest.disabled}
      slotProps={{ htmlInput: { readOnly, ...rest } }}
    />
  ))
);

TextField.displayName = "TextField";

export { TextField };
