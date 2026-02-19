import { FieldDefinition } from "../../types";
import { FieldBlock } from "../FieldBlock";

type FieldBlockItemProps = {
  item: FieldDefinition;
};

const FieldBlockItem = ({ item }: FieldBlockItemProps) => (
  <FieldBlock definition={item} />
);

export { FieldBlockItem };
