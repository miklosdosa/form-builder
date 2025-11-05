import { LayoutForm } from "./LayoutForm";
import { FieldBlockFormProvider, Title } from "../../shared/components";
import { Stack } from "@mui/material";
import { useFields } from "../../shared/hooks";
import { useBoundStore } from "../../store/formEditorStore";

const LayoutSection = () => {
  const selectedStep = useBoundStore((state) => state.selectedStep);
  const fields = useBoundStore((state) => state.definitions);
  const validation = useBoundStore((state) => state.validation);
  const display = useBoundStore((state) => state.display);
  console.log(fields, fields[selectedStep]);
  const { defaultValues, formDefinition, validationSchema, displayRules } =
    useFields({
      definition: fields[selectedStep],
      rules: validation,
      displayRules: display,
    });

  return (
    <Stack>
      <Title main="Layout" mainProps={{ variant: "h5", component: "h1" }} />
      <FieldBlockFormProvider
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <LayoutForm fields={formDefinition} displayRules={displayRules} />
      </FieldBlockFormProvider>
    </Stack>
  );
};

export { LayoutSection };
