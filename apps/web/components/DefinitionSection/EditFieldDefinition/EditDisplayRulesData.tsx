import { enqueueSnackbar } from "notistack";
import { useCallback, useMemo } from "react";
import {
  DisplayDataFormValues,
  DisplayRules,
  FieldBlockDefinition,
} from "../../../shared/types";
import { DefinitionBlockForm } from "../DefinitionBlockForm";
import { FieldBlockFormProvider } from "../../../shared/components";
import { useFields } from "../../../shared/hooks";
import {
  formDisplayRulesFormDefinitions,
  /* formDefinitionDisplayRules,
  formDefinitionValidationRules, */
} from "../DefinitionBlockForm.config";
import { useBoundStore } from "../../../store/formEditorStore";

type EditDisplayRulesDataProps = {
  definition: FieldBlockDefinition;
};

const EditDisplayRulesData = ({ definition }: EditDisplayRulesDataProps) => {
  const { definitionType, name } = definition;
  const display = useBoundStore((state) => state.display);
  const updateDisplay = useBoundStore((state) => state.updateDisplay);

  const initialValues = useMemo(() => {
    const rules = display[name];
    let values = {};
    rules?.forEach((rule) => {
      if (rule.type === "disabled") {
        values = {
          ...values,
          isDisabled: true,
        };
      }
      if (rule.type === "readOnly") {
        values = {
          ...values,
          isReadOnly: true,
        };
      }
    });
    return values;
  }, [name, display]);

  const { formDefinition, defaultValues, validationSchema, displayRules } =
    useFields({
      definition: formDisplayRulesFormDefinitions[definitionType],
      initialValues,
      /* rules: formDefinitionValidationRules[definitionType],
    displayRules: formDefinitionDisplayRules[definitionType], */
    });

  const handleSaveData = useCallback(
    (data: DisplayDataFormValues) => {
      let rule: DisplayRules = {
        [definition.name]: [],
      };
      if (data.isDisabled) {
        rule = {
          [definition.name]: [
            ...rule[definition.name],
            {
              type: "disabled",
              conditions: true,
              value: true,
            },
          ],
        };
      }
      if (data.isReadOnly) {
        rule = {
          [definition.name]: [
            ...rule[definition.name],
            {
              type: "readOnly",
              conditions: true,
              value: true,
            },
          ],
        };
      }
      updateDisplay(rule);
      enqueueSnackbar("Saved", { variant: "success" });

      return {
        errors: [],
      };
    },
    [definition.name, updateDisplay]
  );

  return (
    <FieldBlockFormProvider
      defaultValues={defaultValues}
      validationSchema={validationSchema}
    >
      <DefinitionBlockForm
        formDefinition={formDefinition}
        displayRules={displayRules}
        onSaveData={handleSaveData}
      />
    </FieldBlockFormProvider>
  );
};

export { EditDisplayRulesData };
