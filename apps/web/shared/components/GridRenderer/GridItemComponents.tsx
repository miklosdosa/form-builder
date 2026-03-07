import { FieldDefinition } from "@repo/schemas-types";
import { FieldBlock } from "../FieldBlock";

type FieldBlockItemProps = {
  item: FieldDefinition;
};

const FieldBlockItem = ({ item }: FieldBlockItemProps) => (
  <FieldBlock definition={item} />
);

export { FieldBlockItem };
