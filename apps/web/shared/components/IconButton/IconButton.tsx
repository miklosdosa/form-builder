import { MouseEventHandler, memo } from "react";
import {
  Tooltip,
  IconButton as MuiIconButton,
  SxProps,
  Theme,
} from "@mui/material";
import { Icon, IconsNames } from "../Icon";
import { Placement, ThemeColors } from "../../types";

type CommonProps = {
  tooltipTitle?: string;
  tooltipPlacement?: Placement;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: Extract<
    ThemeColors,
    | "inherit"
    | "success"
    | "warning"
    | "info"
    | "error"
    | "default"
    | "primary"
    | "secondary"
  >;
  edge?: false | "end" | "start" | undefined;
  size?: "small" | "medium" | "large";
  sxProps?: SxProps<Theme>;
  "aria-label"?: string;
  "aria-controls"?: string;
  "aria-haspopup"?:
    | boolean
    | "grid"
    | "dialog"
    | "menu"
    | "false"
    | "true"
    | "listbox"
    | "tree"
    | undefined;
};

type WithChildren = {
  children: React.ReactNode;
  iconName?: never;
  iconSxProps?: never;
};

type WithoutChildren = {
  children?: never;
  iconName: IconsNames;
  iconSxProps?: SxProps<Theme>;
};

type Props = CommonProps & (WithChildren | WithoutChildren);

const IconButton = memo(
  ({
    tooltipTitle,
    className,
    onClick,
    onMouseDown,
    color,
    iconName,
    edge,
    size,
    sxProps,
    iconSxProps,
    children,
    tooltipPlacement,
    disabled,
    ...rest
  }: Props) => {
    return (
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        <MuiIconButton
          className={className}
          sx={sxProps}
          color={color}
          onClick={onClick}
          onMouseDown={onMouseDown}
          edge={edge}
          size={size}
          disabled={disabled}
          {...rest}
        >
          {children || (
            <Icon sxProps={iconSxProps} name={iconName || "AddCircle"} />
          )}
        </MuiIconButton>
      </Tooltip>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
