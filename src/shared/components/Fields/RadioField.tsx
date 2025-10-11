import { forwardRef, InputHTMLAttributes } from "react";
import { InputLabel } from "../InputLabel";

type RadioFieldProps = {
  label?: string;
};

const RadioField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & RadioFieldProps
>(({ label = "", ...rest }, ref) => {
  return (
    <div>
      <InputLabel label={label} />
      <input {...rest} ref={ref} type="radio" />
    </div>
  );
});

export { RadioField };
