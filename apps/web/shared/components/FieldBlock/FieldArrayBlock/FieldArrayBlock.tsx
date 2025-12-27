import { useFieldArray, useFormContext } from "react-hook-form";
import { useCallback } from "react";
import { FieldArrayProps } from "../FieldBlock.types";
import { Paper, Stack } from "@mui/material";
import { stringEvaluate } from "../helpers";
import { Row } from "./Row";
import { ArrayItems } from "./ArrayItems";
import { IconButton, InputLabel } from "@repo/ui";

const FieldArrayBlock = ({
  definition,
  displayRules,
  name,
  addLabel = "Add",
  removeLabel = "Remove",
}: FieldArrayProps) => {
  const fieldArrayName = name ?? definition.name;
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldArrayName,
  });

  const handleAppend = useCallback(() => {
    append({});
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const getArrayDirection = () => {
    const direction = stringEvaluate("arrayDirection", watch, displayRules);

    return direction ?? "row";
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <InputLabel label={definition.label ?? ""} />
        <ArrayItems
          fields={fields}
          arrayItemDirection={getArrayDirection()}
          handleItemRemove={handleRemove}
          arrayItemRemoveLabel={removeLabel}
          arrayName={fieldArrayName}
          itemFormDefinition={definition.fields}
        />
        {/* {fields.map((field, index) => (
          <Row
            key={field.id}
            index={index}
            name={fieldArrayName}
            definition={definition.fields}
            onRemove={handleRemove}
            removeLabel={removeLabel}
            arrayDirection={getArrayDirection()}
          />
        ))} */}
        <div>
          <IconButton
            iconName="AddCircleOutline"
            tooltipTitle="Add option"
            onClick={handleAppend}
          />
        </div>
      </Stack>
    </Paper>
  );
};

export { FieldArrayBlock };
