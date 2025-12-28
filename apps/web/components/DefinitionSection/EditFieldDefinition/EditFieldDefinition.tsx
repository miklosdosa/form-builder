import { FieldBlockDefinition } from "../../../shared/types";
import { EditBasicData } from "./EditBasicData";
import { EditValidationDataContainer } from "./EditValidationDataContainer";
import { EditDisplayRulesData } from "./EditDisplayRulesData";
import { publish } from "../../../events";
import { TabDisplay } from "@repo/ui";

type EditFieldDefinitionProps = { definition: FieldBlockDefinition };

const EditFieldDefinition = ({ definition }: EditFieldDefinitionProps) => {
  const shouldTabChange = (): Promise<boolean> =>
    new Promise((resolve, reject) => {
      publish("onLeaveForm", {
        proceed: () => resolve(true),
        cancel: () => reject(false),
      });
    });
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
      shouldTabChange={shouldTabChange}
    />
  );
};

export { EditFieldDefinition };
