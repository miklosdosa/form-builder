
import { useBoundStore } from "../../../store/formEditorStore";
import { EditValidationData } from "./EditValidationData";
import { formValidationFormDefinitions } from "../FieldDefinitionEditorForm.config";
import { FieldDefinition } from "@repo/schemas-types";

type EditValidationDataContainerProps = {
  definition: FieldDefinition;
};

const EditValidationDataContainer = ({
  definition,
}: EditValidationDataContainerProps) => {
  const { name, definitionType } = definition;
  const validation = useBoundStore((state) => state.validation);
  const updateValidation = useBoundStore((state) => state.updateValidation);

  return (
    <EditValidationData
      initFormDefinition={formValidationFormDefinitions[definitionType]}
      fieldBlockName={name}
      initialValues={validation[name]}
      update={updateValidation}
    />
  );
};

export { EditValidationDataContainer };
