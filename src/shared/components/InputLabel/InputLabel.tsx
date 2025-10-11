import { ComponentProps, memo } from "react";
import classes from "./InputLabel.module.scss";

type InputLabelProps = ComponentProps<"label"> & {
  label: string;
};

const InputLabel = memo(({ label }: InputLabelProps) => (
  <label className={classes.label}>{label}</label>
));

InputLabel.displayName = "InputLabel";

export { InputLabel };
