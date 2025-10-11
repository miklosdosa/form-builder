import { FieldBlock } from "..";
import { FormDefinition } from "../../../types";
import { memo, useCallback } from "react";
import { Stack } from "@mui/material";
import { IconButton } from "../../IconButton";

type RowProps = {
  index: number;
  name: string;
  removeLabel?: string;
  onRemove: (index: number) => void;
  definition: FormDefinition;
  arrayDirection?: string;
};

const Row = memo(
  ({
    index,
    name,
    removeLabel = "Remove",
    definition,
    onRemove,
    arrayDirection,
  }: RowProps) => {
    const handleRemoveClick = useCallback(() => {
      onRemove(index);
    }, [index, onRemove]);

    return (
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Stack flexGrow={1} spacing={2} direction={arrayDirection as any}>
          {definition.map((definition) => (
            <FieldBlock
              key={definition.id}
              name={`${name}.${index}.${definition.name}`}
              definition={definition}
            />
          ))}
        </Stack>
        <IconButton
          iconName="DeleteForever"
          onClick={handleRemoveClick}
          tooltipTitle={removeLabel}
        />
      </Stack>
    );
  }
);

export { Row };
