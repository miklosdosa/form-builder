import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { ComponentType } from "react";
import { LayoutDefinition } from "../../types";
import { Box, Grid } from "@mui/material";
import { IconButton } from "../IconButton";

const ReactGridLayout = WidthProvider(RGL);

type GridRendererProps<T extends { id: string }, P> = {
  layoutDefinition: LayoutDefinition;
  items: T[];
  ItemComponent: ComponentType<{ item: T } & P>;
  itemComponentProps?: P;
  onLayoutUpdate?: (layout: LayoutDefinition) => void;
};

const OrderableGridRenderer = <T extends { id: string }, P = object>({
  layoutDefinition,
  items,
  ItemComponent,
  itemComponentProps,
  onLayoutUpdate,
}: GridRendererProps<T, P>) => {
  return (
    <ReactGridLayout
      className="layout"
      cols={12}
      rowHeight={40}
      draggableHandle=".drag-handle"
      onLayoutChange={(layout) => {
        onLayoutUpdate?.(layout);
      }}
    >
      {items.map((item, i) => (
        <Box
          key={item.id}
          data-grid={layoutDefinition[i]}
          sx={{ "&:hover .drag-handle": { opacity: 1 } }}
        >
          <IconButton
            className="drag-handle"
            size="small"
            iconName="ControlCamera"
            sxProps={{
              backgroundColor: "white",
              position: "absolute",
              opacity: 0,
              top: -16,
              left: -16,
              zIndex: 5,
              "&:hover": { opacity: 1 },
            }}
          />
          <ItemComponent item={item} {...(itemComponentProps as P)} />
        </Box>
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
      {layoutDefinition
        .sort((a, b) => a.y - b.y || a.x - b.y)
        .map((el) => {
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
