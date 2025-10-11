import { memo } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonProps = MuiButtonProps & {
  label: string;
};

const Button = memo(({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
));

Button.displayName = "Button";

export { Button };
