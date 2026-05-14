import { GridLayout } from "@repo/schemas-types";
import { ComponentType } from "react";

export type GridRendererProps<T extends { id: string }, P> = {
  layoutDefinition: GridLayout;
  items: T[];
  ItemComponent: ComponentType<{ item: T } & P>;
  itemComponentProps?: P;
  onLayoutUpdate?: (layout: GridLayout) => void;
};
