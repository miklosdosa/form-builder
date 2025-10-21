import { SnackbarProvider } from "notistack";
import { DefinitionSection } from "./components/DefinitionSection";
import { LayoutSection } from "./components/LayoutSection";
import classes from "./App.module.scss";
import { Stack } from "@mui/material";
import { DialogProvider } from "./shared/components/DialogProvider/ConfirmDialogProvider";

function App() {
  return (
    <SnackbarProvider>
      <DialogProvider>
        <Stack direction="row" spacing={4}>
          <div className={classes.column}>
            <DefinitionSection />
          </div>
          <div className={classes.column}>
            <LayoutSection />
          </div>
        </Stack>
      </DialogProvider>
    </SnackbarProvider>
  );
}

export { App };

export default App;
