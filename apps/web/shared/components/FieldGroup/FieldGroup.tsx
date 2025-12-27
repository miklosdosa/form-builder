import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import { InputLabel } from "@repo/ui";

type FieldGroupProps = { label?: string };

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
