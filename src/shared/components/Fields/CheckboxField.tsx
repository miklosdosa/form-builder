import { forwardRef, InputHTMLAttributes } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

type CheckboxFieldProps = {
  label?: string;
};

const CheckboxField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & CheckboxFieldProps
>(({ label = "", ...rest }, ref) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={!!rest.checked}
          slotProps={{ input: { ...rest, ref } }}
        />
      }
      label={label}
    />
  );
});

export { CheckboxField };
