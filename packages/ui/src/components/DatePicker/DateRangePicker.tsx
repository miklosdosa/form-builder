import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hu } from "date-fns/locale/hu";
import { PickerProps } from "./types";
import { Wrapper } from "./Wrapper";
import { Icon } from "../Icon";

interface DateRangeProps extends PickerProps {
  onChange: (date: (Date | null)[]) => void;
  defaultValue?: (Date | null)[];
}

const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const DateRangePicker = ({
  onChange,
  defaultValue,
  isClearable,
  withPortal,
  inputProps = {},
}: DateRangeProps) => {
  const [dateRange, setDateRange] = useState<(Date | null)[]>(
    defaultValue || [null, null]
  );
  const [startDate, endDate] = dateRange;
  const { fromLabel, toLabel, error, fromError, toError, helperText } =
    inputProps;

  useEffect(() => {
    registerLocale("hu-HU", hu);
  }, []);

  const handleClickFromClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDateRange([null, endDate]);
    onChange([null, endDate]);
  };

  const handleClickToClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDateRange([startDate, null]);
    onChange([startDate, null]);
  };

  const handleRangeChange = (range: (Date | null)[]) => {
    if (range[0] && range[1] && range[0] > range[1]) {
      range[1] = null;
    }
    setDateRange(range);
    onChange(range);
  };

  return (
    <Box sx={{ zIndex: 100 }}>
      <Wrapper sx={{ width: "350px" }}>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          locale="hu-HU"
          showPopperArrow={false}
          selected={startDate}
          onChange={(date: Date | null) => handleRangeChange([date, endDate])}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          withPortal={withPortal}
          customInput={
            <TextField
              label={fromLabel}
              fullWidth
              size="small"
              error={fromError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {(isClearable && startDate && (
                      <IconButton
                        aria-label="clear input"
                        onClick={handleClickFromClear}
                        onMouseDown={handleMouseDown}
                        edge="end"
                      >
                        <Icon name="HighlightOff" />
                      </IconButton>
                    )) || <Icon name="DateRange" />}
                  </InputAdornment>
                ),
              }}
            />
          }
        />
        <Icon name="Remove" />
        <DatePicker
          dateFormat="yyyy.MM.dd"
          locale="hu-HU"
          showPopperArrow={false}
          selected={endDate}
          onChange={(date: Date | null) => handleRangeChange([startDate, date])}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate ?? undefined}
          withPortal={withPortal}
          customInput={
            <TextField
              label={toLabel}
              fullWidth
              size="small"
              error={toError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {(isClearable && endDate && (
                      <IconButton
                        aria-label="clear input"
                        onClick={handleClickToClear}
                        onMouseDown={handleMouseDown}
                        edge="end"
                      >
                        <Icon name="HighlightOff" />
                      </IconButton>
                    )) || <Icon name="DateRange" />}
                  </InputAdornment>
                ),
              }}
            />
          }
        />
      </Wrapper>
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </Box>
  );
};

export { DateRangePicker };
