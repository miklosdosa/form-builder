import { FieldDefinitionCard } from "./FieldDefinitionCard";
import { useBoundStore } from "../../../store/formEditorStore";
import { Stack } from "@mui/material";

const FormDefinitionContainer = () => {
  const formDefinition = useBoundStore((state) => state.fields);
  return (
    <Stack direction="column" spacing={2}>
      {formDefinition.map((fieldDefinition) => (
        <FieldDefinitionCard
          key={fieldDefinition.id}
          definition={fieldDefinition}
        />
      ))}
    </Stack>
  );
};

export { FormDefinitionContainer };
