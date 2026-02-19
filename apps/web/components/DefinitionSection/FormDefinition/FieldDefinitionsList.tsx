import { FieldDefinitionCard } from "./FieldDefinitionCard";
import { useBoundStore } from "../../../store/formEditorStore";
import { Stack } from "@mui/material";

const FieldDefinitionsList = () => {
  const selectedStep = useBoundStore((state) => state.selectedStep);
  const definitions = useBoundStore((state) => state.definitions);
  const fieldDefinitions = definitions[selectedStep] ?? [];

  return (
    <Stack direction="column" spacing={2}>
      {fieldDefinitions.map((fieldDefinition) => (
        <FieldDefinitionCard
          key={fieldDefinition.id}
          definition={fieldDefinition}
        />
      ))}
    </Stack>
  );
};

export { FieldDefinitionsList };
