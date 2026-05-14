import RGL, { WidthProvider } from "react-grid-layout";
import { GridRendererProps } from "./GridRenderer.types";
import "react-grid-layout/css/styles.css";
import { OrderableGridItem } from "./OrderableGridItem";

const ReactGridLayout = WidthProvider(RGL);

const GRID_COLS = 12;
const GRID_ROW_HEIGHT = 40;

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
      cols={GRID_COLS}
      rowHeight={GRID_ROW_HEIGHT}
      draggableHandle=".drag-handle"
      onLayoutChange={(layout) => {
        onLayoutUpdate?.(layout);
      }}
    >
      {items.map((item, i) => (
        <OrderableGridItem
          key={item.id}
          ItemComponent={ItemComponent}
          itemComponentProps={itemComponentProps}
          item={item}
          dataGrid={layoutDefinition[i]}
        />
      ))}
    </ReactGridLayout>
  );
};

export { OrderableGridRenderer };
