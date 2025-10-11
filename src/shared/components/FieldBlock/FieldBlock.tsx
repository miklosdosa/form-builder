import {
  BooleanDefinition,
  DateTimeDefinition,
  FieldArrayDefinition,
  SelectFieldDefinition,
  TextFieldDefinition,
} from "../../types";
import { TextFieldBlock } from "./TextFieldBlock";
import { SelectBlock } from "./SelectBlock";
import { FieldArrayBlock } from "./FieldArrayBlock/FieldArrayBlock";
import { BooleanBlock } from "./BooleanBlock";
import { memo } from "react";
import { FieldBlockProps } from "./FieldBlock.types";
import { DatePickerBlock } from "./DatePickerBlock";

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
      case "Select":
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
      case "Boolean":
        return (
          <BooleanBlock
            name={name}
            definition={definition as BooleanDefinition}
            auxOnChange={auxOnChange}
          />
        );
      case "DateTime":
        return (
          <DatePickerBlock
            name={name}
            definition={definition as DateTimeDefinition}
          />
        );
      default:
        return <div />;
    }
  }
);

FieldBlock.displayName = "FieldBlock";

export { FieldBlock };
