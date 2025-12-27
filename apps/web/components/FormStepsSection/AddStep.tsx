import { IconButton } from "@repo/ui";
import { useBoundStore } from "../../store/formEditorStore";

const AddStep = () => {
  const steps = useBoundStore((state) => state.steps);
  const addStep = useBoundStore((state) => state.addStep);

  const handleAddStep = () => {
    addStep({ name: `Step_${steps.length + 1}` });
  };

  return (
    <IconButton
      iconName="AddCircle"
      tooltipTitle="Add step"
      onClick={handleAddStep}
    />
  );
};

export { AddStep };
