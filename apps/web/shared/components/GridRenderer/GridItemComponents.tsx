import { FieldBlockDefinition } from "../../types";
import { FieldBlock } from "../FieldBlock";

type FieldBlockItemProps = {
  item: FieldBlockDefinition;
};

const FieldBlockItem = ({ item }: FieldBlockItemProps) => (
  <FieldBlock definition={item} />
);

export { FieldBlockItem };
