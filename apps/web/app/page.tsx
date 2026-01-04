"use client";
import { Stack, Box, Divider } from "@mui/material";
import { DefinitionSection } from "../components/DefinitionSection";
import { FormStepsSection } from "../components/FormStepsSection";
import { LayoutSection } from "../components/LayoutSection";

export default function App() {
  return (
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
  );
}
