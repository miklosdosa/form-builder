import { AppBar, Toolbar } from "@mui/material";
import { useDialog } from "../../shared/hooks/useDialog";
import { Preview } from "../Preview/Preview";
import { IconButton } from "@repo/ui";

const MainAppBar = () => {
  const { confirm } = useDialog();
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          tooltipTitle="Preview"
          iconName="Launch"
          onClick={() =>
            confirm({
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
