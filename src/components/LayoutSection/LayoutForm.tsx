import { FieldBlock } from "../../shared/components/FieldBlock";
import { Stack } from "@mui/material";
// import hash from "object-hash";
import { DisplayRules, FieldBlockDefinitionArray } from "../../shared/types";
import {
  FieldBlockItem,
  OrderableGridRenderer,
} from "../../shared/components/GridRenderer";
import { useBoundStore } from "../../store/formEditorStore";

type LayoutFormProps = {
  fields: FieldBlockDefinitionArray;
  displayRules?: DisplayRules;
};

const LayoutForm = ({ fields = [], displayRules }: LayoutFormProps) => {
  // const formKey = hash(fields);
  const layoutDefinition = useBoundStore(
    (state) => state.layouts[state.selectedStep]
  );
  const updateLayout = useBoundStore((state) => state.updateLayout);

  const state = useBoundStore((state) => state);

  console.log(state);

  return (
    <Stack direction="column" spacing={2}>
      {layoutDefinition !== undefined ? (
        <OrderableGridRenderer
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
    </Stack>
  );
};

export { LayoutForm };
