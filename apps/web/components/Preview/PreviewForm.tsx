import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";
import { FieldBlock } from "../../shared/components/FieldBlock";

import { Stack } from "@mui/material";
import { DisplayRules, FieldBlockDefinitionArray } from "../../shared/types";
import {
  FieldBlockItem,
  GridRenderer,
} from "../../shared/components/GridRenderer";
import { useBoundStore } from "../../store/formEditorStore";
import { publish } from "../../events";
import { Button } from "@repo/ui";

type PreviewFormProps = {
  fields: FieldBlockDefinitionArray;
  displayRules?: DisplayRules;
};

const PreviewForm = ({ fields, displayRules }: PreviewFormProps) => {
  // const formKey = hash(fields);
  const methods = useFormContext();
  const layoutDefinition = useBoundStore(
    (state) => state.layouts[state.selectedStep]
  );
  const updateLayout = useBoundStore((state) => state.updateLayout);
  const { handleSubmit } = methods;

  const handleValid = (data: unknown) => {
    publish("onStepSubmit", { proceed: () => alert(JSON.stringify(data)) });
  };

  const handleInvalid = (data: FieldErrors<FieldValues>) => {
    const errors = Object.keys(data).map((key) => ({
      field: key,
      type: data[key]?.type,
    }));
    console.log(JSON.stringify(errors));
  };

  return (
    <form onSubmit={handleSubmit(handleValid, handleInvalid)}>
      <Stack direction="column" spacing={2}>
        {layoutDefinition !== undefined ? (
          <GridRenderer
            layoutDefinition={layoutDefinition}
            items={fields}
            ItemComponent={FieldBlockItem}
            onLayoutUpdate={(layout) => updateLayout(layout)}
          />
        ) : (
          fields.map((definition) => (
            <FieldBlock
              key={definition.id}
              definition={definition}
              displayRules={displayRules?.[definition.name]}
              // auxOnChange={(value) => auxOnChange(value, definition.name)}
            />
          ))
        )}
        <div>
          <Button label="Submit" type="submit" />
        </div>
      </Stack>
    </form>
  );
};

export { PreviewForm };
