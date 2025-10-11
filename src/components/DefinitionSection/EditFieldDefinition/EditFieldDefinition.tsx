import { FieldBlockDefinition } from "../../../shared/types";
import { TabDisplay } from "../../../shared/components/TabDisplay";
import { EditBasicData } from "./EditBasicData";
import { EditValidationDataContainer } from "./EditValidationDataContainer";
import { EditDisplayRulesData } from "./EditDisplayRulesData";

type EditFieldDefinitionProps = {
  definition: FieldBlockDefinition;
};

const EditFieldDefinition = ({ definition }: EditFieldDefinitionProps) => {
  return (
    <TabDisplay
      tabs={[
        {
          id: "basic",
          label: "Basic",
          panel: <EditBasicData definition={definition} />,
        },
        {
          id: "validation",
          label: "Validation rules",
          panel: <EditValidationDataContainer definition={definition} />,
        },
        {
          id: "display",
          label: "Display rules",
          panel: <EditDisplayRulesData definition={definition} />,
        },
      ]}
      tabChangeEvent="onLeaveForm"
    />
  );
};

export { EditFieldDefinition };
