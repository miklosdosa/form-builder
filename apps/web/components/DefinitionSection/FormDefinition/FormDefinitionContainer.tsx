import { FieldDefinitionCard } from "./FieldDefinitionCard";
import { useBoundStore } from "../../../store/formEditorStore";
import { Stack } from "@mui/material";

const FormDefinitionContainer = () => {
  const selectedStep = useBoundStore((state) => state.selectedStep);
  const formDefinitions = useBoundStore((state) => state.definitions);
  return (
    <Stack direction="column" spacing={2}>
      {formDefinitions[selectedStep]?.map((fieldDefinition) => (
        <FieldDefinitionCard
          key={fieldDefinition.id}
          definition={fieldDefinition}
        />
      ))}
    </Stack>
  );
};

export { FormDefinitionContainer };
