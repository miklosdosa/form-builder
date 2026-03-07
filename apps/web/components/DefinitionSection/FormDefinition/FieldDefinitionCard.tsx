
import { Paper } from "@mui/material";
import { FieldDefinitionCardContent } from "./FieldDefinitionCardContent";
import { FieldDefinition } from "@repo/schemas-types";

type FieldDefinitionCardProps = {
  definition: FieldDefinition;
};

const FieldDefinitionCard = ({ definition }: FieldDefinitionCardProps) => {
  return (
    <Paper sx={{ p: 1 }}>
      <FieldDefinitionCardContent definition={definition} />
    </Paper>
  );
};

export { FieldDefinitionCard };
