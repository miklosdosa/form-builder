import { useCallback } from "react";
import { Stack } from "@mui/material";
import { useBoundStore } from "../../../store/formEditorStore";
import { publish } from "../../../events";
import { IconButton } from "@repo/ui";

type FieldDefinitionCardActionProps = { definitionId: string };

const FieldDefinitionCardActions = ({
  definitionId,
}: FieldDefinitionCardActionProps) => {
  const deleteField = useBoundStore((store) => store.deleteField);
  const setFieldUnderEdit = useBoundStore((state) => state.setFieldUnderEdit);
  const fieldUnderEdit = useBoundStore((state) => state.fieldUnderEdit);

  const editing = fieldUnderEdit === definitionId;

  const onEditClick = () => {
    if (fieldUnderEdit !== null) {
      publish("onLeaveForm", {
        proceed: () => setFieldUnderEdit(definitionId),
      });
    } else {
      setFieldUnderEdit(definitionId);
    }
  };

  const handleRemove = useCallback(() => {
    console.log(definitionId);
    deleteField({ id: definitionId });
  }, [definitionId, deleteField]);

  const handleClose = async () => {
    publish("onLeaveForm", { proceed: () => setFieldUnderEdit(null) });
  };

  return (
    <Stack direction="row">
      {!editing ? (
        <>
          <IconButton
            iconName="Edit"
            tooltipTitle="Edit"
            onClick={onEditClick}
          />
          <IconButton
            iconName="DeleteForever"
            tooltipTitle="Remove"
            onClick={handleRemove}
          />
        </>
      ) : (
        <IconButton
          iconName="CloseOutlined"
          tooltipTitle="Cancel"
          onClick={handleClose}
        />
      )}
    </Stack>
  );
};

export { FieldDefinitionCardActions };
