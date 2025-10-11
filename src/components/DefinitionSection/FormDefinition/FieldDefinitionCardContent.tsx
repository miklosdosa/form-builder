import { FieldBlockDefinition } from "../../../shared/types";
import { Title } from "../../../shared/components/Title";
import { EditFieldDefinition } from "../EditFieldDefinition/EditFieldDefinition";
import { Stack } from "@mui/material";
import { useBoundStore } from "../../../store/formEditorStore";
import { FieldDefinitionCardActions } from "./FieldDefinitionCardActions";

type FieldDefinitionCardContentProps = {
  definition: FieldBlockDefinition;
};

const FieldDefinitionCardContent = ({
  definition,
}: FieldDefinitionCardContentProps) => {
  const fieldUnderEdit = useBoundStore((state) => state.fieldUnderEdit);
  const { id, definitionType, type } = definition;
  const editing = fieldUnderEdit === id;
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Title
          main={definitionType}
          sub={type}
          mainProps={{ variant: "h6" }}
          subProps={{ variant: "subtitle1" }}
        />
        <FieldDefinitionCardActions definitionId={id} />
      </Stack>
      {editing && <EditFieldDefinition definition={definition} />}
    </Stack>
  );
};

export { FieldDefinitionCardContent };
