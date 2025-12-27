"use client";
import { LayoutForm } from "./LayoutForm";
import { FieldBlockFormProvider, Title } from "../../shared/components";
import { Stack } from "@mui/material";
import { useStoreFields } from "../../shared/hooks";

const LayoutSection = () => {
  const {
    defaultValues,
    fields,
    validationSchema,
    displayRules,
    layoutDefinition,
  } = useStoreFields();

  return (
    <Stack>
      <Title main="Layout" mainProps={{ variant: "h5", component: "h1" }} />
      <FieldBlockFormProvider
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <LayoutForm
          fields={fields}
          displayRules={displayRules}
          layoutDefinition={layoutDefinition}
        />
      </FieldBlockFormProvider>
    </Stack>
  );
};

export { LayoutSection };
