import { enqueueSnackbar } from "notistack";
import { useCallback, useMemo } from "react";
import {
  FormDefinition,
  ValidationDataFormValues,
  ValidationRule,
} from "../../../shared/types";
import { DefinitionBlockForm } from "../DefinitionBlockForm";
import { FieldBlockFormProvider } from "../../../shared/components";
import { useFields } from "../../../shared/hooks";
import { Validation } from "../../../store/formEditorStore.types";

type EditValidationDataProps = {
  initFormDefinition: FormDefinition;
  fieldBlockName: string;
  update: (payload: Validation) => void;
  initialValues?: ValidationRule[];
};

const EditValidationData = ({
  /* definition */ initFormDefinition,
  initialValues,
  fieldBlockName,
  update,
}: EditValidationDataProps) => {
  const transformedInitialValues = useMemo(() => {
    const rules = initialValues;
    let values = {};
    rules?.forEach((rule) => {
      if (rule.type === "required") {
        values = {
          ...values,
          isRequired: true,
          requiredErrorMessage: rule.errorMessage,
        };
      }
    });
    return values;
  }, [initialValues]);

  const {
    formDefinition,
    defaultValues,
    validationSchema,
    displayRules,
    updateFormDefinition,
  } = useFields({
    definition: initFormDefinition,
    initialValues: transformedInitialValues,
    /* rules: formDefinitionValidationRules[definitionType],
    displayRules: formDefinitionDisplayRules[definitionType], */
  });

  const handleSaveData = useCallback(
    (data: ValidationDataFormValues) => {
      let rule: { [x: string]: ValidationRule[] } = {
        [fieldBlockName]: [],
      };
      if (data.isRequired) {
        rule = {
          [fieldBlockName]: [
            ...rule[fieldBlockName],
            {
              type: "required",
              errorMessage: data.requiredErrorMessage,
            },
          ],
        };
      }

      update(rule);
      enqueueSnackbar("Saved", { variant: "success" });

      return {
        errors: [],
      };
    },
    [fieldBlockName, update]
  );

  return (
    <FieldBlockFormProvider
      defaultValues={defaultValues}
      validationSchema={validationSchema}
    >
      <DefinitionBlockForm
        formDefinition={formDefinition}
        displayRules={displayRules}
        updateFormDefinition={updateFormDefinition}
        onSaveData={handleSaveData}
      />
    </FieldBlockFormProvider>
  );
};

export { EditValidationData };
