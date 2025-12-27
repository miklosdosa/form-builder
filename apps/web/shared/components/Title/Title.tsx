import { Stack, Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

type TitleProps = {
  main: string;
  sub?: string;
  mainProps?: TypographyProps;
  subProps?: TypographyProps;
};

const Title = memo(({ main, sub, mainProps, subProps }: TitleProps) => (
  <Stack>
    <Typography {...mainProps}>{main}</Typography>
    {sub && <Typography {...subProps}>{sub}</Typography>}
  </Stack>
));

export { Title };
