import { memo, useCallback } from "react";
import { generate } from "short-uuid";
import { useBoundStore } from "../../../store/formEditorStore";
import { PayloadAdd } from "../../../store/formEditorStore.types";
import { MenuItem } from "@mui/material";

type AddDefinitionItemProps = {
  label: string;
  payload: PayloadAdd;
  onClick?: () => void;
};

const AddDefinitionItem = memo(
  ({ payload, label, onClick }: AddDefinitionItemProps) => {
    const addField = useBoundStore((state) => state.addField);

    const handleAdd = useCallback(() => {
      const generated = generate();
      addField({ ...payload, id: generated, name: generated });
    }, [addField, payload]);

    return (
      <MenuItem
        onClick={() => {
          handleAdd();
          onClick?.();
        }}
      >
        {label}
      </MenuItem>
    );
  }
);

AddDefinitionItem.displayName = "AddDefinitionItem";

export { AddDefinitionItem };
