import { AddDefinition } from "./AddDefinition";
import { FormDefinitionContainer } from "./FormDefinition";
import { Stack } from "@mui/material";
import { Title } from "../../shared/components";

const DefinitionSection = () => (
  <Stack component="section" flexDirection="column">
    <Title
      main="Edit definition"
      mainProps={{ variant: "h4", component: "h1" }}
    />
    <AddDefinition />
    <FormDefinitionContainer />
  </Stack>
);

export { DefinitionSection };
