import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { ComponentType } from "react";
import { LayoutDefinition } from "../../types";
import { Grid } from "@mui/material";

const ReactGridLayout = WidthProvider(RGL);

type GridRendererProps<T extends { id: string }, P> = {
  layoutDefinition: LayoutDefinition;
  items: T[];
  ItemComponent: ComponentType<{ item: T } & P>;
  itemComponentProps?: P;
};

const OrderableGridRenderer = <T extends { id: string }, P = object>({
  layoutDefinition,
  items,
  ItemComponent,
  itemComponentProps,
}: GridRendererProps<T, P>) => {
  return (
    <ReactGridLayout
      className="layout"
      layout={layoutDefinition}
      cols={12}
      rowHeight={60}
    >
      {items.map((item) => (
        <div key={item.id}>
          <ItemComponent item={item} {...(itemComponentProps as P)} />
        </div>
      ))}
    </ReactGridLayout>
  );
};

const GridRenderer = <T extends { id: string }, P = object>({
  layoutDefinition,
  items,
  ItemComponent,
  itemComponentProps,
}: GridRendererProps<T, P>) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      {layoutDefinition.map((el) => {
        const r = items.find((e) => e.id === el.i);
        if (!r) {
          return null;
        }
        return (
          <Grid key={el.i} size={el.w}>
            <ItemComponent item={r} {...(itemComponentProps as P)} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { GridRenderer, OrderableGridRenderer };
