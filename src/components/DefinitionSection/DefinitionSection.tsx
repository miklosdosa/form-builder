import { AddDefinition } from "./AddDefinition";
import { Stack } from "@mui/material";
import { Title } from "../../shared/components";
import { FormDefinitionContainer } from "./FormDefinition";

const DefinitionSection = () => (
  <Stack component="section" flexDirection="column">
    <Title
      main="Edit definition"
      mainProps={{ variant: "h5", component: "h1" }}
    />
    <AddDefinition />
    <FormDefinitionContainer />
  </Stack>
);

export { DefinitionSection };
