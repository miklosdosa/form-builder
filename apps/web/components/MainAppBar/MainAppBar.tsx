import { AppBar, Box, Toolbar } from "@mui/material";
import { AccountMenu } from "./AccountMenu";
import { Preview } from "./Preview";

const MainAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <Box>
          <Preview />
        </Box>
        <Box>
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { MainAppBar };
