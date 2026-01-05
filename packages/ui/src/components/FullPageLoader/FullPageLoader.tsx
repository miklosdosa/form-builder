import { Box, CircularProgress } from "@mui/material";

const FullPageLoader = () => (
  <Box
    position="absolute"
    display="flex"
    width="100%"
    height="100%"
    alignItems="center"
    justifyContent="center"
  >
    <CircularProgress />
  </Box>
);

export { FullPageLoader };
