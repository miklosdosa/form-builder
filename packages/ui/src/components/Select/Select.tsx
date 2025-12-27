import { forwardRef } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";

type SelectProps = {
  label?: string;
  options: { id: string; value: string; label: string }[];
};

const Select = forwardRef<HTMLSelectElement, MuiSelectProps & SelectProps>(
  ({ label = "", options = [], value = "", ...rest }, ref) => {
    return (
      <FormControl fullWidth>
        <InputLabel id={`${rest.name}-label`}>{label}</InputLabel>
        <MuiSelect
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
        </MuiSelect>
      </FormControl>
    );
  }
);

export { Select };
