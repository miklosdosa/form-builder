import { forwardRef, InputHTMLAttributes } from "react";
import { InputLabel } from "../InputLabel";

type RadioFieldProps = { label?: string };

const Radio = forwardRef<
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

export { Radio };
