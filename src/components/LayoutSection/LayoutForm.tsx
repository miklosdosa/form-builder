import { useFormContext } from "react-hook-form";
import { FieldBlock } from "../../shared/components/FieldBlock";
import { Button } from "../../shared/components/Button";
import { Stack } from "@mui/material";
// import hash from "object-hash";
import { DisplayRules, FormDefinition } from "../../shared/types";
import { OrderableGridRenderer } from "../../shared/components/GridRenderer";
import { useBoundStore } from "../../store/formEditorStore";

type PreviewFormProps = {
  fields: FormDefinition;
  displayRules?: DisplayRules;
};

const PreviewForm = ({ fields, displayRules }: PreviewFormProps) => {
  // const formKey = hash(fields);
  const methods = useFormContext();
  const layoutDefinition = useBoundStore((state) => state.layout);
  const updateLayout = useBoundStore((state) => state.updateLayout);
  const { handleSubmit } = methods;

  const handleValid = (data: unknown) => {
    alert(JSON.stringify(data));
  };

  const handleInvalid = (data: any) => {
    const errors = Object.keys(data).map((key) => ({
      field: key,
      type: data[key].type,
    }));
    console.log(JSON.stringify(errors));
  };

  return (
    <form
      /* key={formKey} */ onSubmit={handleSubmit(handleValid, handleInvalid)}
    >
      <Stack direction="column" spacing={2}>
        {layoutDefinition !== undefined ? (
          <OrderableGridRenderer
            layoutDefinition={layoutDefinition}
            items={fields}
            ItemComponent={TestItem}
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

const TestItem = ({ item }) => (
  <FieldBlock
    definition={item}
    //displayRules={displayRules?.[item.name]}
  />
);

export { PreviewForm };
