import { AppBar, Toolbar } from "@mui/material";
import { IconButton } from "../../shared/components/IconButton";
import { useDialog } from "../../shared/hooks/useDialog";
import { Preview } from "../Preview/Preview";

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
