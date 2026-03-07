"use client";

import { TextFieldBlock } from "./TextFieldBlock";
import { SelectBlock } from "./SelectBlock";
import { FieldArrayBlock } from "./FieldArrayBlock/FieldArrayBlock";
import { BooleanBlock } from "./BooleanBlock";
import { memo } from "react";
import { FieldBlockProps } from "./FieldBlock.types";
import { DatePickerBlock } from "./DatePickerBlock";
import { BooleanFieldDefinition, DateFieldDefinition, FieldArrayDefinition, SelectFieldDefinition, TextFieldDefinition } from "@repo/schemas-types";

const FieldBlock = memo(
  ({ definition, name, auxOnChange, displayRules }: FieldBlockProps) => {
    switch (definition.definitionType) {
      case "TextField":
        return (
          <TextFieldBlock
            name={name}
            definition={definition as TextFieldDefinition}
            displayRules={displayRules}
            auxOnChange={auxOnChange}
          />
        );
      case "SelectField":
        return (
          <SelectBlock
            name={name}
            definition={definition as SelectFieldDefinition}
            displayRules={displayRules}
            auxOnChange={auxOnChange}
          />
        );
      case "FieldArray":
        return (
          <FieldArrayBlock
            name={name}
            definition={definition as FieldArrayDefinition}
            displayRules={displayRules}
          />
        );
      case "BooleanField":
        return (
          <BooleanBlock
            name={name}
            definition={definition as BooleanFieldDefinition}
            auxOnChange={auxOnChange}
          />
        );
      case "DateField":
        return (
          <DatePickerBlock
            name={name}
            definition={definition as DateFieldDefinition}
          />
        );
      default:
        return <div />;
    }
  }
);

FieldBlock.displayName = "FieldBlock";

export { FieldBlock };
