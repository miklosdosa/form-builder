import { enqueueSnackbar } from "notistack";
import { useCallback } from "react";
import {
  FieldConfigFormValues,
  FieldDefinition,
} from "../../../shared/types";
import { useBoundStore } from "../../../store/formEditorStore";
import { FieldDefinitionEditorForm } from "../FieldDefinitionEditorForm";
import { FieldBlockFormProvider } from "../../../shared/components";
import { useFields } from "../../../shared/hooks";
import {
  formDefinitionDisplayRules,
  formDefinitionLayout,
  fieldEditorFormsByKind,
  formDefinitionValidationRules,
} from "../FieldDefinitionEditorForm.config";

type EditBasicDataProps = {
  definition: FieldDefinition;
};

const EditBasicData = ({ definition }: EditBasicDataProps) => {
  const { id: definitionId, definitionType } = definition;
  const updateField = useBoundStore((state) => state.updateField);
  const { formDefinition, defaultValues, validationSchema, displayRules } =
    useFields({
      definition: fieldEditorFormsByKind[definitionType],
      initialValues: definition,
      rules: formDefinitionValidationRules[definitionType],
      displayRules: formDefinitionDisplayRules[definitionType],
    });

  const layoutDefinition = formDefinitionLayout[definitionType];

  const handleSaveData = useCallback(
    (data: FieldConfigFormValues) => {
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
      <FieldDefinitionEditorForm
        formDefinition={formDefinition}
        displayRules={displayRules}
        layoutDefinition={layoutDefinition}
        onSaveData={handleSaveData}
      />
    </FieldBlockFormProvider>
  );
};

export { EditBasicData };
