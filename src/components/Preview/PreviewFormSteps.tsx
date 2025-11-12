import { useCallback, useEffect, useState } from "react";
import { Stepper } from "../../shared/components/Stepper";
import { useBoundStore } from "../../store/formEditorStore";
import { ConfirmEventDetail, subscribe, unsubscribe } from "../../events";

const PreviewFormSteps = () => {
  const steps = useBoundStore((state) => state.steps);
  const activeStep = useBoundStore((state) => state.selectedStep);
  const setSelectedStep = useBoundStore((state) => state.setSelectedStep);
  const [completedSteps, setCompletedSteps] = useState<
    { id: string; name: string }[]
  >([]);

  const handleNextStep = useCallback(
    (e: CustomEvent<ConfirmEventDetail>) => {
      const currentStepIndex = steps.findIndex(
        (step) => step.id === activeStep
      );
      const { proceed } = e.detail;
      setCompletedSteps((prev) => [...prev, steps[currentStepIndex]]);
      proceed?.();
      if (currentStepIndex > -1 && currentStepIndex + 1 < steps.length) {
        setSelectedStep(steps[currentStepIndex + 1].id);
      }
    },
    [activeStep, setSelectedStep, steps]
  );

  useEffect(() => {
    subscribe("onStepSubmit", handleNextStep);
    return () => {
      unsubscribe("onStepSubmit", handleNextStep);
    };
  }, [handleNextStep]);

  return (
    <Stepper
      steps={steps}
      activeStepId={activeStep}
      completedSteps={completedSteps}
    />
  );
};

export { PreviewFormSteps };
