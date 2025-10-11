import { forwardRef } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { OptionDefinition } from "../../types";

type SelectFieldProps = {
  label?: string;
  options: OptionDefinition[];
};

const SelectField = forwardRef<
  HTMLSelectElement,
  SelectProps & SelectFieldProps
>(({ label = "", options = [], value = "", ...rest }, ref) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${rest.name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${rest.name}-label`}
        label={label}
        multiple={rest.multiple}
        size="small"
        value={value}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export { SelectField };
