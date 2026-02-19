import { FieldBlock } from "../../shared/components/FieldBlock";
import { Stack } from "@mui/material";
// import hash from "object-hash";
import {
  FormDisplayRules,
  FieldDefinitions,
  GridLayout,
} from "../../shared/types";
import {
  FieldBlockItem,
  OrderableGridRenderer,
} from "../../shared/components/GridRenderer";
import { useBoundStore } from "../../store/formEditorStore";

type LayoutFormProps = {
  fields: FieldDefinitions;
  layoutDefinition?: GridLayout;
  displayRules?: FormDisplayRules;
};

const LayoutForm = ({
  fields = [],
  displayRules,
  layoutDefinition,
}: LayoutFormProps) => {
  // const formKey = hash(fields);
  const updateLayout = useBoundStore((state) => state.updateLayout);
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
