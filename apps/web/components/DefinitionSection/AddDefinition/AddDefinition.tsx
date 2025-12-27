import { Menu, Stack } from "@mui/material";
import { AddDefinitionItem } from "./AddDefinitionItem";
import { addConfig } from "./config";
import { useState } from "react";
import { IconButton } from "@repo/ui";

const AddDefinition = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {addConfig.map((config) => (
          <AddDefinitionItem
            key={config.id}
            label={config.label}
            payload={config.payload}
            onClick={handleClose}
          />
        ))}
      </Menu>
      <IconButton onClick={handleClick} iconName="DashboardCustomize" />
    </Stack>
  );
};

export { AddDefinition };
