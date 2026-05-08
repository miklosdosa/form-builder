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
    [activeStepId, steps],
  );
  const completedIdSet = useMemo(
    () => new Set(completedSteps.map((s) => s.id)),
    [completedSteps],
  );
  return (
    <MuiStepper activeStep={activeStepIndex}>
      {steps.map((step) => {
        const completed = completedIdSet.has(step.id);
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
