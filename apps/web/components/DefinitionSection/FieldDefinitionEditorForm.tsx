import { FieldValues, useFormContext } from "react-hook-form";
import { FieldBlock } from "../../shared/components/FieldBlock";
import {Button, useDialog} from "@repo/ui"
import {
  /* updateSelectRenderOptions, */
  useSetFormErrors,
} from "./FieldDefinitionEditorForm.helpers";
import { Stack } from "@mui/material";
import { useCallback } from "react";
import { ConfirmEventDetail, useSubscribe } from "../../events";
import { DefinitionError } from "../../store/formEditorStore.types";
import {
  FieldBlockItem,
  GridRenderer,
} from "../../shared/components/GridRenderer";
import { FieldDefinitions, FormDisplayRules, GridLayout } from "@repo/schemas-types";

type FieldDefinitionEditorFormProps<T> = {
  formDefinition: FieldDefinitions;
  displayRules?: FormDisplayRules;
  layoutDefinition?: GridLayout;
  onSaveData: (data: T) => {
    errors: DefinitionError[];
  };
};

const FieldDefinitionEditorForm = <T extends FieldValues>({
  formDefinition,
  onSaveData,
  displayRules,
  layoutDefinition,
}: FieldDefinitionEditorFormProps<T>) => {
  const { open } = useDialog();
  const { handleSubmit, formState } = useFormContext<T>();

  const { isDirty } = formState;

  useSetFormErrors();


  const handleValid = useCallback(
    (data: T) => {
      console.log("handleValid", data);
      return onSaveData({ ...data });
    },
    [onSaveData]
  );

  const confirmLeave = useCallback(
    async (e: CustomEvent<ConfirmEventDetail>) => {
      const { proceed } = e.detail;
      if (!isDirty) {
        proceed?.();
        return;
      }
      await open({
        closeButton: "Cancel",
        title: "Unsaved data",
        content: "There are some unsaved data",
        actions: [
          {
            buttonLabel: "Don't save",
            cb: proceed,
          },
          {
            buttonLabel: "Save",
            cb: () => {
              handleSubmit((data) => {
                const result = handleValid(data);
                if (result.errors.length === 0) {
                  proceed?.();
                }
              })();
            },
          },
        ],
      });
    },
    [open, handleSubmit, handleValid, isDirty]
  );

  useSubscribe("onLeaveForm", confirmLeave);

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Stack direction="column" spacing={2}>
        {layoutDefinition && layoutDefinition.length > 0 ? (
          <GridRenderer
            layoutDefinition={layoutDefinition}
            items={formDefinition}
            ItemComponent={FieldBlockItem}
          />
        ) : (
          formDefinition.map((definition) => (
            <FieldBlock
              key={definition.id}
              definition={definition}
              displayRules={displayRules?.[definition.name]}
              // auxOnChange={(value) => auxOnChange(value, definition.name)}
            />
          ))
        )}

        {/* {formDefinition.map((definition) => {
          console.log("map defs");
          return (
            <FieldBlock
              key={definition.id}
              definition={definition}
              displayRules={displayRules?.[definition.name]}
              // auxOnChange={(value) => auxOnChange(value, definition.name)}
            />
          );
        })} */}
        <Stack alignItems="end">
          <Button
            disabled={!isDirty}
            variant="contained"
            label="Save"
            type="submit"
          />
        </Stack>
      </Stack>
    </form>
  );
};

export { FieldDefinitionEditorForm };
