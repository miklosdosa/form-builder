import { forwardRef, InputHTMLAttributes } from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

type CheckboxFieldProps = { label?: string };

const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & CheckboxFieldProps
>(({ label = "", ...rest }, ref) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={!!rest.checked}
          slotProps={{ input: { ...rest, ref } }}
        />
      }
      label={label}
    />
  );
});

export { Checkbox };
