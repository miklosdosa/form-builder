import { LayoutForm } from "./LayoutForm";
import { FieldBlockFormProvider, Title } from "../../shared/components";
import { Stack } from "@mui/material";
import { useFields } from "../../shared/hooks";
import { useBoundStore } from "../../store/formEditorStore";

const LayoutSection = () => {
  const fields = useBoundStore((state) => state.fields);
  const validation = useBoundStore((state) => state.validation);
  const display = useBoundStore((state) => state.display);
  const { defaultValues, formDefinition, validationSchema, displayRules } =
    useFields({
      definition: fields,
      rules: validation,
      displayRules: display,
    });

  return (
    <Stack>
      <Title main="Layout" mainProps={{ variant: "h4", component: "h1" }} />
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
