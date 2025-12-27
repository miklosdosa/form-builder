import { Paper, Stack } from "@mui/material";
import { useBoundStore } from "../../store/formEditorStore";
import { AddStep } from "./AddStep";
import { Title } from "../../shared/components";

const FormStepsSection = () => {
  const steps = useBoundStore((state) => state.steps);
  const selected = useBoundStore((state) => state.selectedStep);
  const setSelectedStep = useBoundStore((state) => state.setSelectedStep);

  const handleSelectStep = (id: string) => {
    setSelectedStep(id);
  };

  return (
    <Stack>
      <Title main="Form steps" mainProps={{ variant: "h5", component: "h1" }} />
      <Stack direction="row" spacing={1}>
        {steps.map((step) => (
          <Paper
            onClick={() => handleSelectStep(step.id)}
            sx={(theme) => ({
              padding: theme.spacing(1),
              alignContent: "center",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: selected !== step.id ? "Highlight" : undefined,
              },
              color:
                selected === step.id
                  ? theme.palette.secondary.contrastText
                  : undefined,
              backgroundColor:
                selected === step.id ? theme.palette.primary.main : undefined,
            })}
            key={step.id}
          >
            {step.name}
          </Paper>
        ))}
        <AddStep />
      </Stack>
    </Stack>
  );
};

export { FormStepsSection };
