import { Box, SxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

type WrapperProps = {
  sx?: SxProps;
};

const Wrapper = ({ sx, children }: PropsWithChildren<WrapperProps>) => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      '.react-datepicker-popper': { zIndex: 100 },
      '> .react-datepicker-wrapper': { flex: 1 },
      ...sx,
    }}
  >
    {children}
  </Box>
);

export { Wrapper };
