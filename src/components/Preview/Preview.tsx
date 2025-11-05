import { PreviewForm } from "./PreviewForm";
import { FieldBlockFormProvider } from "../../shared/components";
import { useFields } from "../../shared/hooks";
import { useBoundStore } from "../../store/formEditorStore";

const Preview = () => {
  const selectedStep = useBoundStore((state) => state.selectedStep);
  const fields = useBoundStore((state) => state.definitions);
  const validation = useBoundStore((state) => state.validation);
  const display = useBoundStore((state) => state.display);
  const { defaultValues, formDefinition, validationSchema, displayRules } =
    useFields({
      definition: fields[selectedStep],
      rules: validation,
      displayRules: display,
    });

  return (
    <FieldBlockFormProvider
      defaultValues={defaultValues}
      validationSchema={validationSchema}
    >
      <PreviewForm fields={formDefinition} displayRules={displayRules} />
    </FieldBlockFormProvider>
  );
};

export { Preview };
