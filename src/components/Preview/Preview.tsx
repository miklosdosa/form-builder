import { PreviewForm } from "./PreviewForm";
import { FieldBlockFormProvider } from "../../shared/components";
import { useStoreFields } from "../../shared/hooks";
import { PreviewFormSteps } from "./PreviewFormSteps";
import { Stack } from "@mui/material";

const Preview = () => {
  const { defaultValues, fields, validationSchema, displayRules } =
    useStoreFields();

  return (
    <Stack spacing={4}>
      <PreviewFormSteps />
      <FieldBlockFormProvider
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <PreviewForm fields={fields} displayRules={displayRules} />
      </FieldBlockFormProvider>
    </Stack>
  );
};

export { Preview };
