import { ComponentProps, memo } from "react";

type InputLabelProps = ComponentProps<"label"> & {
  label: string;
};

const InputLabel = memo(({ label }: InputLabelProps) => <label>{label}</label>);

InputLabel.displayName = "InputLabel";

export { InputLabel };
