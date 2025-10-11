import { FieldBlockDefinition } from "../../../shared/types";
import { useBoundStore } from "../../../store/formEditorStore";
import { EditValidationData } from "./EditValidationData";
import { formValidationFormDefinitions } from "../DefinitionBlockForm.config";

type EditValidationDataContainerProps = {
  definition: FieldBlockDefinition;
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
