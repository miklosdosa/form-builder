interface PickerProps {
  isClearable?: boolean;
  withPortal?: boolean;
  filterDate?: (date: Date) => boolean;
  inputProps?: {
    label?: string;
    fromLabel?: string; // in case of range picker
    toLabel?: string; // in case of range picker
    error?: boolean;
    helperText?: string;
    fromError?: boolean;
    toError?: boolean;
  };
}

export type { PickerProps };
