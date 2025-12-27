import { FieldBlockDefinitionArray } from "../../../types";
import { Row } from "./Row";

type ArrayItemsProps = {
  fields: Record<"id", string>[];
  arrayName: string;
  itemFormDefinition: FieldBlockDefinitionArray;
  arrayItemRemoveLabel: string;
  arrayItemDirection: any;
  handleItemRemove: (index: number) => void;
};

const ArrayItems = ({
  fields,
  arrayName,
  itemFormDefinition,
  arrayItemRemoveLabel,
  arrayItemDirection,
  handleItemRemove,
}: ArrayItemsProps) => {
  console.log(fields);
  return (
    <>
      {fields.map((field, index) => (
        <Row
          key={field.id}
          index={index}
          name={arrayName}
          definition={itemFormDefinition}
          onRemove={handleItemRemove}
          removeLabel={arrayItemRemoveLabel}
          arrayDirection={arrayItemDirection}
        />
      ))}
    </>
  );
};

export { ArrayItems };
