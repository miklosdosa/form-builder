import { ComponentProps } from "react";

type InputLabelProps = ComponentProps<"label"> & {
  label: string;
};

const InputLabel = ({ label }: InputLabelProps) => <label>{label}</label>;

export { InputLabel };
