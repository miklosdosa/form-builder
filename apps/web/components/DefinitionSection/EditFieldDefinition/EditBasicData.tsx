import { enqueueSnackbar } from "notistack";
import { useCallback } from "react";
import {
  BasicDataFormValues,
  FieldBlockDefinition,
} from "../../../shared/types";
import { useBoundStore } from "../../../store/formEditorStore";
import { DefinitionBlockForm } from "../DefinitionBlockForm";
import { FieldBlockFormProvider } from "../../../shared/components";
import { useFields } from "../../../shared/hooks";
import {
  formDefinitionDisplayRules,
  formDefinitionLayout,
  formDefinitions,
  formDefinitionValidationRules,
} from "../DefinitionBlockForm.config";

type EditBasicDataProps = {
  definition: FieldBlockDefinition;
};

const EditBasicData = ({ definition }: EditBasicDataProps) => {
  const { id: definitionId, definitionType } = definition;
  const updateField = useBoundStore((state) => state.updateField);
  const { formDefinition, defaultValues, validationSchema, displayRules } =
    useFields({
      definition: formDefinitions[definitionType],
      initialValues: definition,
      rules: formDefinitionValidationRules[definitionType],
      displayRules: formDefinitionDisplayRules[definitionType],
    });

  const layoutDefinition = formDefinitionLayout[definitionType];

  const handleSaveData = useCallback(
    (data: BasicDataFormValues) => {
      console.log(data);
      const result = updateField({ ...data, currentId: definitionId });
      if (result.errors.length === 0) {
        enqueueSnackbar("Saved", { variant: "success" });
      }
      return { errors: result.errors };
    },
    [definitionId, updateField]
  );

  return (
    <FieldBlockFormProvider
      defaultValues={defaultValues}
      validationSchema={validationSchema}
    >
      <DefinitionBlockForm
        formDefinition={formDefinition}
        displayRules={displayRules}
        layoutDefinition={layoutDefinition}
        onSaveData={handleSaveData}
      />
    </FieldBlockFormProvider>
  );
};

export { EditBasicData };
