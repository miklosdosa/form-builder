import { AppBar, Toolbar } from "@mui/material";
import { Preview } from "../Preview/Preview";
import { IconButton, useDialog } from "@repo/ui";

const MainAppBar = () => {
  const { open } = useDialog();
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          tooltipTitle="Preview"
          iconName="Launch"
          onClick={() =>
            open({
              title: "Preview",
              content: Preview,
              fullScreen: true,
              closeButton: "Close",
            })
          }
        />
      </Toolbar>
    </AppBar>
  );
};

export { MainAppBar };
