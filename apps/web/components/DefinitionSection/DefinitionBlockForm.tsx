import { FieldValues, useFormContext } from "react-hook-form";
import {
  DisplayRules,
  FieldBlockDefinitionArray,
  LayoutDefinition,
} from "../../shared/types";
import { FieldBlock } from "../../shared/components/FieldBlock";
import { Button } from "../../shared/components/Button";
import {
  /* updateSelectRenderOptions, */
  useSetFormErrors,
} from "./DefinitionBlockForm.helpers";
import { Stack } from "@mui/material";
import { useCallback, useEffect } from "react";
import { ConfirmEventDetail, subscribe, unsubscribe } from "../../events";
import { useDialog } from "../../shared/hooks/useDialog";
import { DefinitionError } from "../../store/formEditorStore.types";
import {
  FieldBlockItem,
  GridRenderer,
} from "../../shared/components/GridRenderer";

type DefinitionBlockEditFormProps<T> = {
  formDefinition: FieldBlockDefinitionArray;
  displayRules?: DisplayRules;
  layoutDefinition?: LayoutDefinition;
  onSaveData: (data: T) => {
    errors: DefinitionError[];
  };
};

const DefinitionBlockForm = <T extends FieldValues>({
  formDefinition,
  onSaveData,
  displayRules,
  layoutDefinition,
}: DefinitionBlockEditFormProps<T>) => {
  const { confirm } = useDialog();
  const { handleSubmit, formState } = useFormContext<T>();

  const { isDirty } = formState;

  useSetFormErrors();

  /*  const auxOnChange = (value: string | boolean, name: string) => {
    switch (name) {
      case "multiple":
        setValue("type", "select");
        console.log("set");
        return;
      default:
        return;
    }
  }; */

  const handleValid = useCallback(
    (data: T) => {
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
      await confirm({
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
    [confirm, handleSubmit, handleValid, isDirty]
  );

  useEffect(() => {
    subscribe("onLeaveForm", confirmLeave);
    return () => {
      unsubscribe("onLeaveForm", confirmLeave);
    };
  }, [confirmLeave]);

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

export { DefinitionBlockForm };
