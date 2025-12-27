import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useMemo } from "react";

type StepperProps = {
  steps: { id: string; name: string }[];
  activeStepId: string;
  completedSteps?: { id: string; name: string }[];
};

const Stepper = ({
  steps,
  activeStepId,
  completedSteps = [],
}: StepperProps) => {
  const activeStepIndex = useMemo(
    () => steps.findIndex((step) => step.id === activeStepId),
    [activeStepId, steps]
  );
  return (
    <MuiStepper activeStep={activeStepIndex}>
      {steps.map((step) => {
        const completed = completedSteps.find((cStep) => cStep.id === step.id);
        return (
          <Step key={step.name} completed={!!completed}>
            <StepLabel>{step.name}</StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
};

export { Stepper };
