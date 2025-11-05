import { SnackbarProvider } from "notistack";
import { DefinitionSection } from "./components/DefinitionSection";
import { LayoutSection } from "./components/LayoutSection";
import classes from "./App.module.scss";
import { Box, Divider, Stack } from "@mui/material";
import { DialogProvider } from "./shared/components/DialogProvider/ConfirmDialogProvider";
import { MainAppBar } from "./components/MainAppBar";
import { FormStepsSection } from "./components/FormStepsSection/FormStepsSection";

function App() {
  return (
    <SnackbarProvider>
      <DialogProvider>
        <MainAppBar />
        <Stack spacing={2}>
          <Box pt={2}>
            <FormStepsSection />
          </Box>
          <Divider />
          <Stack direction="row" spacing={4}>
            <div className={classes.column}>
              <DefinitionSection />
            </div>
            <div className={classes.column}>
              <LayoutSection />
            </div>
          </Stack>
        </Stack>
      </DialogProvider>
    </SnackbarProvider>
  );
}

export { App };

export default App;
