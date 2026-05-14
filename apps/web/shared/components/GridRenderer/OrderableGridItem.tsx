import { Box } from "@mui/material";
import { IconButton } from "@repo/ui";
import { GridRendererProps } from "./GridRenderer.types";
import { LayoutItem } from "@repo/schemas-types";

type OrderableGridItemProps<T extends { id: string }, P> = Pick<
  GridRendererProps<T, P>,
  "ItemComponent" | "itemComponentProps"
> & {
  item: T;
  dataGrid: LayoutItem;
};

const OrderableGridItem = <T extends { id: string }, P = object>({
  ItemComponent,
  item,
  itemComponentProps,
  dataGrid,
}: OrderableGridItemProps<T, P>) => {
  return (
    <Box data-grid={dataGrid} sx={{ "&:hover .drag-handle": { opacity: 1 } }}>
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
  );
};

export { OrderableGridItem };
