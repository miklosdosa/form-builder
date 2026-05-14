import { Grid } from "@mui/material";
import { GridRendererProps } from "./GridRenderer.types";

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

export { GridRenderer };
