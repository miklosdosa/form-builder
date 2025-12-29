"use client";
import { Stack, Box, Divider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { DefinitionSection } from "../components/DefinitionSection";
import { FormStepsSection } from "../components/FormStepsSection";
import { LayoutSection } from "../components/LayoutSection";
import { MainAppBar } from "../components/MainAppBar";
import { ActionDialogProvider } from "@repo/ui";

export default function App() {
  return (
    <SnackbarProvider>
      <ActionDialogProvider>
        <MainAppBar />
        <Stack spacing={2}>
          <Box pt={2}>
            <FormStepsSection />
          </Box>
          <Divider />
          <Stack direction="row" spacing={4}>
            <Box sx={{ flexBasis: "50%" }}>
              <DefinitionSection />
            </Box>
            <Box sx={{ flexBasis: "50%" }}>
              <LayoutSection />
            </Box>
          </Stack>
        </Stack>
      </ActionDialogProvider>
    </SnackbarProvider>
  );
}
