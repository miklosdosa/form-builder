import { FieldBlockDefinition } from "../../../shared/types";
import { Paper } from "@mui/material";
import { FieldDefinitionCardContent } from "./FieldDefinitionCardContent";

type FieldDefinitionCardProps = {
  definition: FieldBlockDefinition;
};

const FieldDefinitionCard = ({ definition }: FieldDefinitionCardProps) => {
  return (
    <Paper sx={{ p: 1 }}>
      <FieldDefinitionCardContent definition={definition} />
    </Paper>
  );
};

export { FieldDefinitionCard };
