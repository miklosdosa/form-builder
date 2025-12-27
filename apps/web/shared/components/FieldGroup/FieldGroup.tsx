import { PropsWithChildren } from "react";
import { InputLabel } from "../InputLabel";
import { Stack } from "@mui/material";

type FieldGroupProps = {
  label?: string;
};

const FieldGroup = ({
  label,
  children,
}: PropsWithChildren<FieldGroupProps>) => {
  return (
    <Stack flexDirection="column">
      {label && <InputLabel label={label} />}
      <Stack direction="column">{children}</Stack>
    </Stack>
  );
};

export { FieldGroup };
