import React from "react";
import { MouseEventHandler } from "react";
import * as iconAssets from "../../../assets/icons";
import { SvgIcon, SxProps, Theme } from "@mui/material";
import { ThemeColors } from "../../types";

export type IconsNames = keyof typeof iconAssets;

export interface IconProps {
  name: IconsNames;
  sxProps?: SxProps<Theme>;
  color?: ThemeColors;

  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Icon = React.memo(({ name, onClick, sxProps, color }: IconProps) => {
  const IconComponent = iconAssets[name];

  return (
    <SvgIcon color={color || "inherit"} onClick={onClick} sx={sxProps}>
      <IconComponent />
    </SvgIcon>
  );
});

Icon.displayName = "Icon";

export { Icon };
