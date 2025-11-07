import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";
import { FieldBlock } from "../../shared/components/FieldBlock";
import { Button } from "../../shared/components/Button";
import { Stack } from "@mui/material";
// import hash from "object-hash";
import { DisplayRules, FieldBlockDefinitionArray } from "../../shared/types";
import {
  FieldBlockItem,
  GridRenderer,
} from "../../shared/components/GridRenderer";
import { useBoundStore } from "../../store/formEditorStore";

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
    alert(JSON.stringify(data));
  };

  const handleInvalid = (data: FieldErrors<FieldValues>) => {
    const errors = Object.keys(data).map((key) => ({
      field: key,
      type: data[key]?.type,
    }));
    console.log(JSON.stringify(errors));
  };

  return (
    <form
      /* key={formKey} */ onSubmit={handleSubmit(handleValid, handleInvalid)}
    >
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
