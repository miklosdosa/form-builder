import { InputAdornment, TextField } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hu } from "date-fns/locale/hu";
import { useEffect, useState } from "react";
import { PickerProps } from "./types";
import { Wrapper } from "./Wrapper";
import { Icon } from "../../Icon";

interface SimpleDateProps extends PickerProps {
  name?: string;
  onChange: (date: Date | null) => void;
  defaultValue?: Date | null;
  disabled?: boolean;
}

const SimpleDate = ({
  onChange,
  name,
  defaultValue,
  isClearable,
  withPortal,
  disabled,
  inputProps = {},
  filterDate,
}: SimpleDateProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(
    defaultValue
  );
  const { label, error, helperText } = inputProps;

  useEffect(() => {
    registerLocale("hu-HU", hu);
  }, []);

  return (
    <Wrapper>
      <DatePicker
        showPopperArrow={false}
        selected={selectedDate}
        dateFormat="yyyy.MM.dd"
        locale="hu-HU"
        filterDate={filterDate}
        name={name}
        disabled={disabled}
        customInput={
          <TextField
            label={label}
            fullWidth
            size="small"
            error={error}
            helperText={helperText}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon name="CalendarToday" />
                </InputAdornment>
              ),
            }}
          />
        }
        onChange={(update) => {
          onChange(update);
          setSelectedDate(update);
        }}
        isClearable={isClearable}
        withPortal={withPortal}
      />
    </Wrapper>
  );
};

export { SimpleDate };
